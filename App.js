import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";

import fb from "./screens/fb";
import ins from "./screens/ins";

import { createAppContainer } from "react-navigation";


export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}


const TabNavigator = createBottomTabNavigator({
  fb: { screen: fb  },
  ins: { screen: ins }
})
//{
//   defaultNavigationOptions: ({navigation})=>({
//     tabBarIcon: ()=>{
//       const routeName = navigation.state.routeName;
//       console.log(routeName)
//       if(routeName === "facebook"){
//         return(
//           <Image
//           source={require("assets/facebook.png")}
//           style={{width:40, height:40}}
//         />)
        
        
//       }
//       else if(routeName === "instagram"){
//         return(
//           <Image
//           source={require("assets/instagram.png")}
//           style={{width:40, height:40}}
//         />)
        
//       }
//     }
//   })
// }
// );
const AppContainer = createAppContainer(TabNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
