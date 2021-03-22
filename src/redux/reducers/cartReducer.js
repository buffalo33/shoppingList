const initialState = {
  carts: [],
}
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_LISTS':
      var newCart = [action.payload.id,[]];
      //console.log(newCart);
      return {
        carts: [newCart, ...state.carts],
      }
    case 'ADD_TO_CART':
      console.log("add cart");
      //console.log(action.id_list);
      var Tmp = state.carts;
      //console.log("Tmp")
      //console.log(Tmp);
      var i = 0;
      while (Tmp[i][0] != action.id_list)
      {
        //console.log(i);
        i++;
      }

      //console.log(Tmp[i][1]);
      Tmp[i][1].push(action.payload);
      //console.log("Tmp[i][1]")
      //console.log(Tmp[i][1]);
      console.log("Tmp")
      console.log(Tmp);
      return {
        //lists: [...state.lists],
        carts: [...state.carts],
      }
    case 'DELETE_ITEM_CART':
      return {
        carts: [...state.carts.filter(x => x != action.payload)],
      }
    default:
      return state
  }
}