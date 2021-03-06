import React from 'react'
import {Text, View, Image,StyleSheet} from 'react-native'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler'
import { Dimensions } from "react-native";
import { Button } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image as Img} from "cloudinary-react";
function Info({}){
    let imagewidth = Dimensions.get('window').width
    const  imageheight = Dimensions.get('window').height
    let wid = Math.round((imagewidth/2)-20)
    console.log(wid)
    const image = "https://res.cloudinary.com/drqzgt17b/image/upload/v1592442086/bcseeg0ys70qpg4xlsmg.jpg"

    return(
        <ScrollView style={styles.page}>
            <Text style= {{ paddingTop:30,fontWeight:"bold",fontSize:25, textAlign:'center',color:"white" }}>
                About ImageColorization
            </Text>
            <View style={{
                justifyContent: "center",  
                alignItems:"center",
                paddingTop: 10
            }}>
              <View
              style={{
              padding: 20,
              backgroundColor:"#f5f5f5",
              borderBottomWidth:1,
              borderColor:'#f5deb3',
              padding:'2%', 
              width:'75%',
              marginTop:'10%',
              borderColor:'#ff00ff',
              borderWidth:2,
              borderRadius:10,
           
            }}
              >
              <Text style= {{ fontWeight:"800",fontSize:20,color:"black",textAlign:'center' }}>
              Bring a new meaning to your 
                      photos using image colorizer
                      Through our advance machine
                      learning software, it can easily
                      give natural color to your image  
              </Text>
              </View>
            </View>
            <Text style= {{ paddingTop:30,fontWeight:"bold",fontSize:25, textAlign:'center',color:"white" }}>
                Our Results
            </Text>
            {/* <View style={{   justifyContent: "space-around",  
            alignItems:"center",
            flex: 1,
            flexDirection: 'row',
            paddingTop: 30

            }}>
                <Img cloudName="drqzgt17b" publicId="aa8fm6xnrcf6tbgqacoc.jpg"  />
                <Img cloudName="drqzgt17b" publicId="aa8fm6xnrcf6tbgqacoc.jpg"  />
                            
            </View> */}

            <View style={{   justifyContent: "space-around",  
            alignItems:"center",
            flex: 1,
            flexDirection: 'row',
            paddingTop: 30

            }}>
                <Image source={{ uri: image }} style={styles.imgStyle} imageStyle={{ borderRadius: 10 }} resizeMode="contain" />
                <Image source={{ uri: image }} style={styles.imgStyle} imageStyle={{ borderRadius: 10 }} resizeMode="contain" />
            
            </View>
            <View style={{   justifyContent: "space-around",  
            alignItems:"center",
            flex: 1,
            flexDirection: 'row',
            paddingTop: 30

            }}>
                <Image source={require("../utils/Gallery/test2.jpeg")} style={styles.imgStyle} imageStyle={{ borderRadius: 10 }} resizeMode="contain" />
                <Image source={require("../utils/Gallery/test2.jpeg")} style={styles.imgStyle} imageStyle={{ borderRadius: 10 }} resizeMode="contain" />
            
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#030D19"
  },
  button:{
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
  },
  imgStyle:{
    width:150,
    height: 200, 
    backgroundColor:'#0E1B3',  
    }
}
)
export default Info 
