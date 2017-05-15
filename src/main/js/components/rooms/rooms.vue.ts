import Vue from 'vue';
import Component from 'vue-class-component';

interface Room
{
    name: string;

    description: string;
}

@Component({
    props: {
        rooms: Array,
    },
})
export default class RoomsView
    extends Vue
{
    rooms: Array<Room>;
};
