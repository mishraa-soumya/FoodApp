export default function storeData (state = {} , action) {
  switch(action.type) {
    case 'STORE_LIST':
      return Object.assign({}, action.payload );
    default:
        return {...state};
  }
}
