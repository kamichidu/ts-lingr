import Vue, { CreateElement, VNode } from 'vue';
import Rx from 'rx';
import axios, { AxiosStatic, AxiosResponse } from 'axios';
import RoomsView from './components/rooms';

(Vue.prototype as any).$http= axios;

namespace Lingr
{
    export interface User
    {
    }

    export class Lingr
    {
        baseUrl: string;

        constructor(baseUrl: string= 'http://lingr.com')
        {
            this.baseUrl= baseUrl;
        }

        createSession(user: string, password: string, appKey?: string): Promise<any>
        {
            return axios.post(`${this.baseUrl}/api/session/create`, {
                user: user,
                password: password,
                appKey: appKey,
            });
        }
    }
}

(window as any).Lingr= Lingr;

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        render(createElement: CreateElement): VNode {
            return createElement(RoomsView);
        },
    });
});
