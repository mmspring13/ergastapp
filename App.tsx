import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DriversScreen} from './src/screens/Drivers';
import {Provider} from 'react-redux';
import {store} from './src/app/store/store.ts';
import {WebviewScreen} from './src/screens/Webview';

const Stack = createNativeStackNavigator<{
  Drivers: undefined;
  Webview: {uri: string; name: string};
}>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Drivers"
          screenOptions={{
            headerTitleAlign: 'left',
            headerShown: true,
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: '#eee',
            },
            headerTitle: props => (
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text>{props.children}</Text>
              </View>
            ),
          }}>
          <Stack.Screen name="Drivers" component={DriversScreen} />
          <Stack.Screen
            name="Webview"
            options={({route}) => ({
              headerTitleAlign: 'center',
              headerTitle: () => <Text>{route.params.name}</Text>,
            })}>
            {props => {
              return <WebviewScreen uri={props.route.params.uri} />;
            }}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
