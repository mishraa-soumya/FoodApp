import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import ProfileScreen from './containers/ProfileContainer'
import ListScreen from './containers/ListContainer'

// export const Tabs = (
//     {
//         List:    { 
//             screen: ListScreen,
//             navigationOptions: {
//                 tabBarLabel: 'List',
//                 tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
//             }, 
//         },
//         Profile: { 
//             screen: ProfileScreen,
//             navigationOptions: {
//                 tabBarLabel: 'Profile',
//                 tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
//             }, 
//         } 
//     }, 
//     TabNavigatorConfig
// )

// const TabNavigatorConfig = {
//     'tabBarPosition': 'top',
//     'animationEnabled': true,
//     'tabBarOptions': {
//     'activeTintColor': '#e91e63',
//     },
// }

// TabNavigator(
//     {
//         List:    { 
//             screen: ListScreen,
//             navigationOptions: {
//                 tabBarLabel: 'List',
//                 tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
//             }, 
//         },
//         Profile: { 
//             screen: ProfileScreen,
//             navigationOptions: {
//                 tabBarLabel: 'Profile',
//                 tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
//             }, 
//         } 
//     }, 
//     TabNavigatorConfig
// )

// const TabNavigatorConfig = {
//     'tabBarPosition': 'top',
//     'animationEnabled': true,
//     'tabBarOptions': {
//     'activeTintColor': '#e91e63',
//     },
//     'initialRouteName': 'Profile',
// }
