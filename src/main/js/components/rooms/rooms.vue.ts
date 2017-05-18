import Vue from 'vue';
import { Component, Prop, Provide } from 'vue-property-decorator';
import { AxiosStatic } from 'axios';

interface Room
{
    name: string;

    description: string;
}

@Component
export default class RoomsView
    extends Vue
{
    @Provide()
    rooms: Array<Room>= [];

    @Provide()
    room: Room= {name: '', description: ''};

    $http: AxiosStatic;

    mounted()
    {
        this.fetchRooms();
    }

    fetchRooms()
    {
        this.$http.get(`/api/room/show`);
    }
};
