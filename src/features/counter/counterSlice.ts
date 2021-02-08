import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import Blue from "./../../images/blue.jpg";
import Red from "./../../images/red.jpg";
import Yellow from "./../../images/yellow.jpg";
interface CounterState {
  value: number;
  Items: Array<{ names: string, price: number,title: string,image: string }>;
  total:number;
}

const initialState: CounterState = {
  value: 0,
  Items:[],
  total:0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    AddBlue: state => {
      state.Items.push({
        names:"Blue Shirt",
        price:17.99,
        title:"No fancing sizing chart here,one t-shirt size to rule all them",
        image:Blue
      })
      // console.log("State =>",state.Items[0].names);
      state.value += 1;
      state.total+=17.99;
    },
    AddRed: state => {
      state.Items.push({
        names:"Red Shirt",
        price:35.99,
        title:"The Only Product on our site that might actually be worth",
        image:Red
      })
      // console.log("State =>",state.Items[0].names);
      state.value += 1;
      state.total+=35.99;
    },
    AddYellow: state => {
      state.Items.push({
        names:"Yellow Shirt",
        price:4.99,
        title:"The Unique t-shirt is guranteed to fit nobody,not even new born babaies",
        image:Yellow
      })
      // console.log("State =>",state.Items[0].names);
      state.value += 1;
      state.total+=4.99;
    },
    deletee: (state, action: PayloadAction<number>) => {
      
      state.total-=state.Items[action.payload].price;
      state.Items.splice(action.payload,1);
      state.value -= 1;
      
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    
  },
});

export const { AddBlue,deletee,AddRed,AddYellow } = counterSlice.actions;



export const selectCount = (state: RootState) => ({
  values:state.counter.value,
  Items:state.counter.Items,
  total:state.counter.total.toFixed(2),
});

export default counterSlice.reducer;
