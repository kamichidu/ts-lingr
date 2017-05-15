import Vue, { CreateElement, VNode } from 'vue';
import Rx from 'rx';

import RoomsView from './components/rooms';

document.addEventListener('DOMContentLoaded', () => {
    // new RoomsView({
    //     el: '#app',
    //     propsData: {
    //         rooms: [{
    //             name: 'test',
    //             description: 'this is a test',
    //         }],
    //     },
    // });
    new Vue({
        el: '#app',
        render(createElement: CreateElement): VNode {
            return createElement(RoomsView, {
                props: {
                    rooms: [{
                        name: 'hi',
                        description: 'hoge',
                    }],

                    subject: 0,
                },
            });
        },
    });
});
