import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    avocadoList: [],
    avocadoCart: [],
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
            state.avocadoCart.push(action.payload)
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