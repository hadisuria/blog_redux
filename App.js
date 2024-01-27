/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import {Provider} from 'react-redux';
import store from './src/store';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{title: 'Blog List Redux'}}
      />
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={{title: 'Blog ShowScreen Redux'}}
      />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
      />
      <Stack.Screen
        name="Edit"
        component={EditScreen}
      />
    </Stack.Navigator>
  );
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.contentContainer}>
          <NavigationContainer>
            <Provider store={store}>
              <RootStack />
            </Provider>
          </NavigationContainer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
    flexGrow: 1,
  }
});

export default App;
