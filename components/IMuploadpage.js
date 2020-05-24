import * as React from 'react';
import {  Image, View, ScrollView ,StyleSheet,Dimensions, ImageBackground,Text,TouchableOpacity, TouchableHighlight } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Button} from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Icon,Header} from 'react-native-elements'




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
    if(image === null){
     return (

         <>   
        <ImageBackground
         source={require('../utils/img-6.jpg')}       
         style={{flex:1,resizeMode:'cover',justifyContent:'center'}}
          // blurRadius={2}
>
          {/* <Header
            leftComponent={<Icon name='list' onPress={() => (this.props.navigation.openDrawer())}/>}
              centerComponent={{ text: 'Image Colorization', style: { color: '#fff' } }}
              rightComponent={<Icon name='camera' onPress={()=>this.props.navigation.navigate('Camera')}/>}
            />  */}
          
          <View style={{flex:1}}> 
            
            <View style={{ marginLeft:20, paddingTop:60}}>
            <Text style={styles.title}>ImageColorization</Text>
              </View>
              {/* <View style={{backgroundColor:'#0E1B28',paddingBottom:10,paddingTop:10,opacity:0.9 }}>
                <Text style={styles.title}>ImageColorization</Text>
              </View> */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',paddingTop:130 }}>            
                    {/* <Button style= {{
                    alignContent:'center',
                    width:200,
                    backgroundColor:'#0E1B39'
                  }}
                    color="#0E1B39"
                    raised={true}
                    title="Pick an image" onPress={this._pickImage} />
            <Button
                  icon={
                    <MaterialIcons
                      name="photo_camera"
                      size={15}
                      color="white"
                    />
                  }
                  style= {{ 
                    width:200,
                    alignContent: "center",
                    backgroundColor:'#0E1B39',
                    paddingTop: 20}}                   
                    raised={true}
                    onPress={()=>this.props.navigation.goBack()}
                    color="#0E1B39"
                    title="Camera"
                   /> */}
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
                    onPress={()=>this.props.navigation.goBack()}
                   >
                     <Text style={styles.buttontext}>
                        Camera
                     </Text>

                   </TouchableHighlight>
                   
                   <TouchableHighlight
                    style={styles.button }
                    underlayColor={"transparent"}
                    onPres={()=>(this.props.navigation.navigate('Info'))}
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
      // let {width,height} = this.state;
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

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri , width: result.width , height: result.height});
      }
      console.log(result.width)
      console.log(result.height)
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