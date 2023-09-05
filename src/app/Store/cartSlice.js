import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    avocadoList: [],
    avocadoCart: [],
    avocadoCartCount: 0,
    total: 0,
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
            const subtotal = (Number(avocado.price) * quantity);
            state.total += subtotal;
        },
        removeAvo: (state, action)=> {
            const { id, price } = action.payload;
            const avoRemoved = state.avocadoCart.find((item)=> item.avocado.id === id);
            if (avoRemoved.quantity > 1) {
                avoRemoved.quantity = avoRemoved.quantity - 1;
            } else {
                state.avocadoCart = state.avocadoCart.filter((item)=> item.avocado.id !== id);
            }
            (state.total -= Number(price));
            state.avocadoCartCount = state.avocadoCartCount - 1;
        },
        clearCart: (state)=> {
            state.avocadoCart = [];
            state.avocadoCartCount = 0;
            state.total = 0;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
})

export const { setAvos, addAvo, removeAvo, clearCart, setLoading } = cartSlice.actions;
export default cartSlice.reducer;