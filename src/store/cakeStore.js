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
    },
    AddCakeAPI: async(payload)=>{
        const apiResponse = await axios.post("http://localhost:4000/cakes",payload);
        set((state)=>{
            state.cakeData.push(apiResponse.data);
        })
    },
    updateCakeAPI: async (payload) => {
        const apiResponse = await axios.put(`http://localhost:4000/cakes/${payload.id}`,payload);

        set((state)=>{
            let cakeState = state.cakeData.filter((c)=>c.id !==payload.id);
            cakeState.push(apiResponse.data);
            state.cakeData= cakeState;
        })
    },
    deleteCakeAPI: async (id) => {
        const apiResponse = await axios.delete(`http://localhost:4000/cakes/${id}`);
        set((state)=>{
            state.cakeData = state.cakeData.filter((c)=>c.id !== id);
        })
    }
}))));

export const getCakeById = (id) => {
    return (state)=> {
        let cake =  state.cakeData.filter((c)=>c.id === Number(id));
        if(cake) {
            return cake[0];
        }
        return null;
    }
};

