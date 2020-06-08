export const _pickImages = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        
      });
      if (!result.cancelled) {

        // this.setState({ image: result.uri , width: result.width , height: result.height});
      console.log( "source => ",result.uri)

      console.log(result.width)
        console.log('In Result')
        this.props.navigation.navigate('ImagePage',{image:result.uri,imagewidth:result.width,imageheight: result.height})
      }
    } catch (E) {
      console.log(E);
    }
  };