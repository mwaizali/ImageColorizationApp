import React,{useState} from 'react'
import {Text, View, Image,StyleSheet} from 'react-native'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from "react-native";
export default function ImagePage(props){
    
    
    const {image} = props.route.params
    console.log( "source => ",image)
    const imagewidth = Dimensions.get('window').width
    const  imageheight = Dimensions.get('window').height
    console.log( "Image Width => ",imagewidth)
    console.log( "Image height => ",imageheight)


    
    return(

        <ScrollView style={styles.page}>
        
        <View style={{   justifyContent: "center",  
          alignItems:"center",
          flex: 1,
          paddingTop: 30
        }}>
        <Image source={{ uri: image }} style={ {width:imagewidth,height: 550, backgroundColor:'white', alignItems:'center' }} imageStyle={{ borderRadius: 10 }} resizeMode="contain" />
          <TouchableHighlight
          style={styles.button }
          underlayColor={"transparent"}
          onPres={()=>(this.props.navigation.navigate('Info'))}
          >
            <Text style={styles.buttontext}>
              Save 
            </Text>

          </TouchableHighlight>
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
  }
}
)