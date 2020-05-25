import React, { useState, useEffect, Component }  from 'react';
import { View, Text, StyleSheet, Dimensions, PermissionsAndroid, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions'
import { useKeepAwake } from 'expo-keep-awake';
import { Icon } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function CameraPage({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    },[]);

  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      navigation.navigate.goBack();
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{flex: 1, justifyContent: 'space-between' }} type={type}>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 15, alignItems: 'flex-end' }}>
                <MaterialCommunityIcons name="message-reply"
                    style={{ color: 'white', fontSize: 36 }}
                ></MaterialCommunityIcons>

                <View style={{ alignItems: 'center' }}>
                    <MaterialCommunityIcons name="circle-outline"
                        style={{ color: 'white', fontSize: 100 }}
                    ></MaterialCommunityIcons>
                    
                </View>
                <MaterialCommunityIcons name="google-circles-communities"
                    style={{ color: 'white', fontSize: 36 }}
                ></MaterialCommunityIcons>
            </View>

        </Camera>
      </View>
  
    );
  
  }
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
export default CameraPage