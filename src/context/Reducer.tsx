
export const Reducer = (state, action) => {
  console.log("info reducer",state)
  console.log("action reducer",action)
 switch (action.type) {
     case "AGREGAR_FAVORITOS":{
         return {
          ...state, 
          books: [...state.books , action.payload]
         };
        }
 }
 return state;
}
