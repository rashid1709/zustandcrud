import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import axios from 'axios';

export const useCakeStore = create(
    devtools(
        immer((set)=>({
    cakeData:[],
    getCakesAPI: async() =>{
        const apiResponse = await axios.get("http://localhost:4000/cakes");
        set((state)=>{
            state.cakeData= apiResponse.data;
        })
    }
}))));

