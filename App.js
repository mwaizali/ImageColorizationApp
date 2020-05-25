import React from 'react';
import 'react-native-gesture-handler';
import { View,StatusBar,Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Constants } from 'react-native-unimodules';
import IMuploadpage from './components/IMuploadpage'
import CameraPage from './components/CameraPage';
import ImagePage from './components/ImagePage';
import Info from './components/Info';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const MyStatusBar=({backgroundColor,...props})=>{
  return(
    <View style={{backgroundColor,height:Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const InStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {


  return (

      <View style={{flex:1}}>
        {/* <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          /> */}
        {/* <MyStatusBar barStyle='light-content'/> */}
        <NavigationContainer>
          <InStack.Navigator>
            <InStack.Screen name="UploadImage" component={IMuploadpage}
            options={
              {
                title:"Upload Image",
                headerRight: () => (<MaterialIcons name='home' size = {30} />),
                headerShown:false
              }
            }
            />
            <InStack.Screen name="CameraPage" component={CameraPage}
            options={
              {
                //title:'Add Car'


              }
            }
            />
            <InStack.Screen name="Info" component={Info} options={{
              // title: 'Info'
              headerShown: false

            }}/>
            <InStack.Screen name="ImagePage" component={ImagePage} options={{
              // title: 'Info',
              headerShown: false
            }}/>

          </InStack.Navigator>
          {/* <Drawer.Navigator >
                <Drawer.Screen name="Home" component={IMuploadpage} />
                <Drawer.Screen name="Camera" component={CameraPage} /> 
                <Drawer.Screen name="Info" component={Info} /> 
          </Drawer.Navigator> */}
          
        </NavigationContainer>
      </View>
  );
}

// _activate = () => {
//   activateKeepAwake(CameraPage);
//   };

// _deactivate = () => {
//   deactivateKeepAwake(CameraPage);
//   };