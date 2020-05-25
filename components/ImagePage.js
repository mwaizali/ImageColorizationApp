import React,{useState} from 'react'
import {Text, View, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ImagePage(props){
    
    
    const {image} = props.route.params
    console.log( "source => ",image)
    const imagewidth = props.route.params.imagewidth
    const {imageheight} = props.route.params
    console.log( "Image Width => ",imagewidth)
    console.log( "Image height => ",imageheight)

    return(

        <ScrollView style={{ flex: 1 }}>
        
        <View style={{ flex: 1}}>
        <Image source={{ uri: image }} style={ {resizeMode: "cover" ,width:imagewidth,height:imageheight }} />
          
          {/* <Button
          icon={
            <MaterialIcons
              name="camera"
              size={15}
              color="white"
            />
          }
          style= {{ flex: 1,
            justifyContent: "center",
            alignItems: "center", padding: 50}}
            onPress={()=>props.navigation.goBack()}
           
           /> */}
        </View>
    </ScrollView>
    
    )
}