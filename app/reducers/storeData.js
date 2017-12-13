export default function storeData (state = {} , action) {
  switch(action.type) {
    case 'STORE_LIST':
      return Object.assign({}, state, {data: action.payload } );
    default:
        return {...state};
  }
}
