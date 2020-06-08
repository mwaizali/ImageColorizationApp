import React from 'react';
import { View,Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IMuploadpage from './components/IMuploadpage'
import CameraPage from './components/CameraPage';
import ImagePage from './components/ImagePage';
import Info from './components/Info';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const InStack = createStackNavigator();

export default function App() {


  return (

      <View style={{flex:1}}>
        <NavigationContainer>
          <InStack.Navigator>
            <InStack.Screen name="UploadImage" component={IMuploadpage}
            options={
              {
                headerShown:false
              }
            }
            />
            <InStack.Screen name="CameraPage" component={CameraPage}
            options={
              {
                headerShown: false
              }
            }
            />
            <InStack.Screen name="Info" component={Info} options={{
              headerShown: false

            }}/>
            <InStack.Screen name="ImagePage" component={ImagePage} options={{
                headerShown: true,
                headerTintColor:"white",
                title: "",
                headerStyle: {
                  backgroundColor: 'black',
                },
               
              }
            
            }/>

          </InStack.Navigator>
          
        </NavigationContainer>
      </View>
  );
}
