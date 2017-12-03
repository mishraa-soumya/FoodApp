// import { combineReducers } from 'redux'
// import appData from './dataReducer'

// const rootReducer = combineReducers({
//     appData
// })

// export default rootReducer


import { combineReducers } from 'redux';
import { navReducer } from '../../App';
import homePageData from './homePage'
import storeData from './storeData'

const rootReducer = combineReducers({
    nav: navReducer,
    homePageData,
    storeData
});

export default rootReducer;
// import { NavigationActions } from 'react-navigation';
//
// import { AppNavigator } from '../../App';

// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
// const initialNavState = AppNavigator.router.getStateForAction(
//     firstAction,
//     tempNavState
// );

// function nav(state = {} , action) {
//   let nextState = {};
//
//   switch (action.type) {
//     case 'Login':
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.back(),
//         state
//       );
//       break;
//     case 'Logout':
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.navigate({ routeName: 'Main' }),
//         state
//       );
//       break;
//     default:
//       nextState = nextState;
      // nextState = AppNavigator.router.getStateForAction(action, state);
  //     break;
  //
  // }

  // Simply return the original `state` if `nextState` is null or undefined.
//   return nextState || state;
// }

// const initialAuthState = { isLoggedIn: false };
//
// function auth(state = initialAuthState, action) {
//   switch (action.type) {
//     case 'Main':
//       return { ...state, isLoggedIn: true };
//     case 'Logout':
//       return { ...state, isLoggedIn: false };
//     default:
//       return state;
//   }
// }
