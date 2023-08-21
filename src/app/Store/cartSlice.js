import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    avocadoList: [],
    avocadoCart: [],
    avocadoCartCount: 0,
    loading: true,
}

export const fetchAvocados = createAsyncThunk(
    'products/fetchAvocados',
    async (_, {dispatch}) => {
        dispatch(setLoading(true))
        const response = await fetch('https://platzi-avo.vercel.app/api/avo');
        const {data} = await response.json();
        dispatch(setAvos(data))
        dispatch(setLoading(false))
    }
  );

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setAvos: (state, action) => {
            state.avocadoList = action.payload;
        },
        addAvo: (state, action) => {
            const { avocado, quantity } = action.payload;
            // Verificar si ya existe el avo 
            const existingAvo = state.avocadoCart.find(item => item.avocado.id === avocado.id);
            if (existingAvo) {
                existingAvo.quantity += quantity;
                state.avocadoCartCount = existingAvo.quantity; 
            } else {
                state.avocadoCart.push({ avocado, quantity });
                state.avocadoCartCount += quantity; 
            }
        },
        removeAvo: (state, action)=> {
            state.avocadoCart = state.avocadoCart.filter((item)=> item.id !== action.payload)
        },
        clearCart: (state)=> {
            return []
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
})

export const { setAvos, addAvo, removeAvo, clearCart, setLoading } = cartSlice.actions;
export default cartSlice.reducer;