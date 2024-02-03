

<template>
    <div>
        <input type="text" placeholder="房間ID" v-model="roomId" />
        <button @click="joinRoom">加入聊天室</button>
        <button @click="leaveRoom">離開聊天室</button>
    </div>
</template>
  
<script setup>
import { ref, reactive, onUnmounted,computed } from 'vue';
import io from 'socket.io-client';
import { useRoute } from 'vue-router';

const route = useRoute();

// 使用computed確保roomId能夠響應路由參數的變化
const roomId = computed(() => route.params.roomId);const socket = io('http://localhost:8080'); // 更改為您的後端地址
const localStream = ref(null);
const peers = reactive({});

function setupMediaStream() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        localStream.value = stream;
        stream.getTracks().forEach(track => {
            for (let peerId in peers) {
                peers[peerId].addTrack(track, stream);
            }
        });
    }).catch(error => console.error('媒體流錯誤:', error));
}

function joinRoom() {
    setupMediaStream();
    socket.emit('message', `join:${roomId.value}`);
    socket.on('user-joined', handleUserJoined);
    socket.on('offer', handleReceiveOffer);
    socket.on('answer', handleReceiveAnswer);
    socket.on('ice-candidate', handleReceiveIceCandidate);
}

function leaveRoom() {
    if (localStream.value) {
        localStream.value.getTracks().forEach(track => track.stop());
    }
    for (let peerId in peers) {
        peers[peerId].close();
    }
    socket.emit('message', `leave:${roomId.value}`);
    socket.off('user-joined', handleUserJoined);
    socket.off('offer', handleReceiveOffer);
    socket.off('answer', handleReceiveAnswer);
    socket.off('ice-candidate', handleReceiveIceCandidate);
}

function handleUserJoined(peerId) {
    const peerConnection = new RTCPeerConnection();
    localStream.value.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream.value);
    });
    peerConnection.onicecandidate = event => {
        if (event.candidate) {
            socket.emit('message', `ice-candidate:${roomId.value}:${JSON.stringify(event.candidate)}`);
        }
    };
    peerConnection.createOffer().then(offer => {
        return peerConnection.setLocalDescription(offer);
    }).then(() => {
        socket.emit('message', `offer:${roomId.value}:${JSON.stringify(peerConnection.localDescription)}`);
    });
    peers[peerId] = peerConnection;
}

function handleReceiveOffer(peerId, description) {
    const peerConnection = new RTCPeerConnection();
    peerConnection.setRemoteDescription(new RTCSessionDescription(description));
    localStream.value.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream.value);
    });
    peerConnection.createAnswer().then(answer => {
        return peerConnection.setLocalDescription(answer);
    }).then(() => {
        socket.emit('message', `answer:${roomId.value}:${JSON.stringify(peerConnection.localDescription)}`);
    });
    peers[peerId] = peerConnection;
}

function handleReceiveAnswer(peerId, description) {
    const peerConnection = peers[peerId];
    peerConnection.setRemoteDescription(new RTCSessionDescription(description));
}

function handleReceiveIceCandidate(peerId, candidate) {
    const peerConnection = peers[peerId];
    peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
}

onUnmounted(() => {
    leaveRoom();
});
</script>
  