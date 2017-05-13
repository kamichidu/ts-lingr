import Vue from 'vue';
import Rx from 'rx';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
    });
});

// declare function require(name: string): any;
// const App= require('./App.vue');
//
// const sampleData= {
//     rooms: [{
//         name: 'RoomA',
//     }],
//     messages: {
//         roomA: [{
//             id: '1482702016.965281',
//             localId: '1482702016.965281',
//             publicSessionId: '1482702016.965281',
//             room: 'roomName',
//             speakerId: 'kamichidu',
//             nickname: 'Kamichidu',
//             iconUrl: 'http://www.gravatar.com/avatar/d3ff167426d2f4a0cbba07cb02e9d10a.jpg',
//             text: 'testestetseteste',
//             timestamp: '2016-12-26 06:57:30',
//             type: 'user',
//         }],
//     },
// };
//
// document.addEventListener('DOMContentLoaded', () => {
//     new Vue({
//         el: '#app',
//         template: `<x-app v-bind:messages="messages" />`,
//         components: {
//             'x-app': App,
//         },
//         data: {
//             messages: sampleData.messages.roomA,
//         },
//     });
// });
