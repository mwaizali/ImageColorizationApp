import * as React from 'react';
import {  Image, View, ScrollView ,StyleSheet,Dimensions, ImageBackground,Text,TouchableOpacity, TouchableHighlight } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Button} from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Icon,Header} from 'react-native-elements'

import { _pickImages } from "../utils/pickimage";


class IMuploadpage extends React.Component {
  state = {
    image: null,
    width1: 0,
    height1: 0,
  };

  
  render() {
    var { image} = this.state;
    const {width,height}= Dimensions.get('window')
        // console.log(height)
        if(image == null ){

        return (
         <>   
        <ImageBackground
         source={require('../utils/img-6.jpg')}       
         style={{flex:1,justifyContent:'center'}}
          // blurRadius={2}
>
    
          <View style={{flex:1}}> 
            
            <View style={{ marginLeft:20, paddingTop:60}}>
            <Text style={styles.title}>ImageColorization</Text>
              </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',paddingTop:130 }}>            
                   <TouchableHighlight
                    style={styles.button }
                    underlayColor={"transparent"}
                    onPress={this._pickImage}
                   >
                     <Text style={styles.buttontext}>
                        Colorize It
                     </Text>

                   </TouchableHighlight>
                   
                   <TouchableHighlight
                    style={styles.button }
                    underlayColor={"transparent"}
                    onPress={()=>this.props.navigation.navigate('CameraPage')}
                   >
                     <Text style={styles.buttontext}>
                        Camera
                     </Text>

                   </TouchableHighlight>
                   
                   <TouchableHighlight
                    style={styles.button }
                    underlayColor={"transparent"}
                    onPress={()=>(this.props.navigation.navigate('Info'))}
                   >
                     <Text style={styles.buttontext}>
                        Info
                     </Text>

                   </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
            </>
        );
    }
    else{
      let {width,height} = this.state;
        return (
            <ScrollView style={{ flex: 1,alignSelf: "center" }}>
        
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    
                    <Button title="Pick an image" onPress={this._pickImage} />  
                    {image && <Image source={{ uri: image }} style={{ width: width, height:height, resizeMode: "cover" }} />}
                  
                  <Button
                  icon={
                    <MaterialIcons
                      name="photo_camera"
                      size={15}
                      color="white"
                    />
                  }
                  style= {{ flex: 1,
                    justifyContent: "center",
                    alignItems: "center", padding: 50}}
                    onPress={()=>this.props.navigation.goBack()}
                   
                   />
                </View>
            </ScrollView>
            
        );
    }

  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };
  cloudinaryUpload = (photo) => {
    // console.log("=>",photo)
    const data = new FormData()
    data.append('file', photo.uri)
    data.append('upload_preset', 'drqzgt17b')
    data.append("cloud_name", "drqzgt17b")
    console.log(data)
    fetch("https://api.cloudinary.com/v1_1/drqzgt17b/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(data => {
        // setPhoto(data.secure_url)
        console.log(data.url)
        this.props.navigation.navigate('ImagePage',{image:data.url})

      }).catch(err => {
        Alert.alert("An Error Occured While Uploading")
      })
  }

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        
      });
      if (!result.cancelled) {


        // this.setState({ image: result.uri , width: result.width , height: result.height});
      console.log( "source => ",result)
        const uri = result.uri;
        const source = {
          uri,
        }
        this.cloudinaryUpload(source)
      // console.log(result.width)
      //   console.log('In Result')
      
      }
    } catch (E) {
      console.log(E);
    }
  };
}

const styles = StyleSheet.create({


  heading:{


  },
  title:{
    
    fontFamily:'',
    fontSize:26,
    color:'white',
    fontWeight: 'bold',
    textAlign:'center'


  },
  button:{
    marginRight:40,
    marginLeft:40,
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#0E1B39',
    borderColor:'#ff00ff',
    borderWidth:2,
    borderRadius:10,
    width:250
  },
  buttontext:{
    color:'white',
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold' ,
    // marginLeft:20
  }
})




export default IMuploadpage