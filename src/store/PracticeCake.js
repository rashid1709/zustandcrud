import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useCakeStore = create(
    devtools((set)=>({
    cakeData:[
        {
                id:1,
                name:'Red Velvet',
                cost:120,
                imageUrl:'https://www.foodnetwork.com/content/dam/images/food/fullset/2009/4/5/1/IG1C17_30946_s4x3.jpg'
        },
],
})));

