/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainScreen from './components/MainScreen.js';

class HealthyDietApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Home', index: 0 }}
        renderScene={(route, navigator) =>
          <MainScreen

            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('HealthyDietApp', () => HealthyDietApp);
