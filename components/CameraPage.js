import React, { useState, useEffect, Component }  from 'react';
import { View, Text, StyleSheet, Dimensions, PermissionsAndroid, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions'
import { useKeepAwake } from 'expo-keep-awake';
import { Icon } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import { Container, Content, Header, Item, Icon, Input, Button } from 'native-base'

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
function CameraPage() {

    // camera = null;

    // state = {
    //     hasCameraPermission: null,
    // };


    // async componentDidMount() {

    //     // const camera = await Permissions.askAsync(Permissions.CAMERA);
    //     // // const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    //     // console.log(camera)

    //     // this.requestCameraPermission();
    //     const camera = await Permissions.askAsync(Permissions.CAMERA);
    //     const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    //     const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

    //     this.setState({ hasCameraPermission });
    // };
    

    // async requestCameraPermission(){
    //     try {
    //       const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.CAMERA,
    //         {
    //           title: "IMAGE COLORIZATION APP",
    //           message:
    //             "Image Colorization App needs access to your camera " +
    //             "so you can take awesome pictures.",
    //           buttonNeutral: "Ask Me Later",
    //           buttonNegative: "Cancel",
    //           buttonPositive: "OK"
    //         }
    //       );
    //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         console.log("You can use the camera");
    //         this.camera = PermissionsAndroid.RESULTS.GRANTED
    //         const hasCameraPermission = PermissionsAndroid.RESULTS.GRANTED
    //         this.setState({hasCameraPermission}); 
    //       } else {
    //         console.log("Camera permission denied");
    //       }
    //     } catch (err) {
    //       console.warn(err);
    //     }
    // }

    // render() 
    // {
    //     const { hasCameraPermission } = this.state;
        
    //     if (hasCameraPermission === null) {
    //         return <View >
    //              </View>;
    //     } else if (hasCameraPermission === false) {
    //         return <Text>Access to camera has been denied.</Text>;
    //     }
    //     console.log(this.camera);
    //     return (
    //         <View>
    //             <Camera
    //                 style={styles.preview}
    //                 ref={camera => this.camera = camera }
    //             />
    //         </View>
    //     )
        
    // }

    //just render a text here 
    // render(){
    //     return(
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //             <Text >
    //                 Camera is open 
    //             </Text>
    //         </View>
    //     );


    // // }
    // ComponentWill
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
  //   state = {
  //     hasCameraPermission: null,
  //     type: Camera.Constants.Type.back
  // }
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
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        
        <Camera style={{flex: 1, justifyContent: 'space-between' }} type={type}>
            {/* {setcheckcamera= '1'} */}
          {/* <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            {/* <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
          </View> */}

            {/* <View >
              <Icon name="picture"/>
            </View> */}
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
      // <View style={{ flex: 1 }}>
      //     <Camera style={{ flex: 1, justifyContent: 'space-between' }} type={this.state.type} >

      //         <Header searchBar rounded
      //             style={{
      //                 position: 'absolute', backgroundColor: 'transparent',
      //                 left: 0, top: 0, right: 0, zIndex: 100, alignItems: 'center'
      //             }}
      //         >
      //             <View style={{ flexDirection: 'row', flex: 4 }}>
      //                 <Icon name="logo-snapchat" style={{ color: 'white' }} />
      //                 <Item style={{ backgroundColor: 'transparent' }}>
      //                     <Icon name="ios-search" style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}></Icon>

      //                     <Input
      //                         placeholder="Search"
      //                         placeholderTextColor="white"
      //                     />


      //                 </Item>
      //             </View>

      //             <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-around' }}>
      //                 <Icon name="ios-flash" style={{ color: 'white', fontWeight: 'bold' }} />
      //                 <Icon
      //                     onPress={() => {
      //                         this.setState({
      //                             type: this.state.type === Camera.Constants.Type.back ?
      //                                 Camera.Constants.Type.front :
      //                                 Camera.Constants.Type.back
      //                         })
      //                     }}
      //                     name="ios-reverse-camera" style={{ color: 'white', fontWeight: 'bold' }} />
      //             </View>
      //         </Header>

      //         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 15, alignItems: 'flex-end' }}>
      //             <MaterialCommunityIcons name="message-reply"
      //                 style={{ color: 'white', fontSize: 36 }}
      //             ></MaterialCommunityIcons>

      //             <View style={{ alignItems: 'center' }}>
      //                 <MaterialCommunityIcons name="circle-outline"
      //                     style={{ color: 'white', fontSize: 100 }}
      //                 ></MaterialCommunityIcons>
      //                 <Icon name="ios-images" style={{ color: 'white', fontSize: 36 }} />
      //             </View>
      //             <MaterialCommunityIcons name="google-circles-communities"
      //                 style={{ color: 'white', fontSize: 36 }}
      //             ></MaterialCommunityIcons>

      //         </View>
      //     </Camera>
      // </View>
    );
}
// const { width: winWidth, height: winHeight } = Dimensions.get('window');
// const styles = StyleSheet.create({
//     preview: {
//         height: winHeight,
//         width: winWidth,
//         position: 'absolute',
//         left: 0,
//         top: 0,
//         right: 0,
//         bottom: 0,
//     },
// });

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
export default CameraPage