


 import React from 'react'; 
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from "@react-navigation/stack";
 import Home from './src/home';
 import Edit from './src/edit';
 import Calender from './src/calender'
 
 const Stack = createStackNavigator();
 
  function App() {
   return (
     <NavigationContainer>
        <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Edit" component={Edit} />
         <Stack.Screen name="Calender" component={Calender} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 export default App;

