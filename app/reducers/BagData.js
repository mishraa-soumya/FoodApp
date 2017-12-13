export default function bagData(state= {}, action) {
  switch(action.type){
    case 'USER_BAG_LIST':
      return Object.assign({}, state, {data: action.payload });
    default:
      return {...state}
  }
}
