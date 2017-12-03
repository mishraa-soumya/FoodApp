const initialState = {
  title: 'CHAI KA CHASKA'
}

export default function homePageData(state = initialState , action) {
  switch(action.type) {
    case 'HOME_PAGE_TITLE':
      return state;
    default:
      return state;
  }
}
