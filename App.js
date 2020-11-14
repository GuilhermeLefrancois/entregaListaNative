import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage'
import PilotoPage from './src/pages/PilotoPage'
import PilotoDetailsPage from './src/pages/PilotoDetailsPage'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function App() 
{
  return (  
    <View style={styles.container}>
        <NavigationContainer >
          <Drawer.Navigator initialRouteName="PeoplePage">
            <Drawer.Screen name="Lista de Pessoas" component={PeoplePage} />
            <Drawer.Screen name="Detalhes da Pessoa" component={PeopleDetailsPage} />                     
            <Drawer.Screen name="Lista de Pilotos" component={PilotoPage} />
            <Drawer.Screen name="Detalhes do Piloto" component={PilotoDetailsPage} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create
({
  container: 
  {
    flex: 1,
    backgroundColor: '#aaaaaa',
  },
  menu:
  {
    color: "#FFFFFF"
  }
});

export default App;