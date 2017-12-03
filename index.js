import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import { AppWithNavigationState }  from './App';

import { Provider } from 'react-redux';
import configureStore from './app/configureStore'

const store = configureStore();

const FoodApp = () => (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
)


AppRegistry.registerComponent('foodApp', () => FoodApp);
