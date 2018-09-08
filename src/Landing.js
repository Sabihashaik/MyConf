import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import {Button} from 'native-base';
var myBackground=require('../assets/icons/sunset.png')

class Landing extends React.Component {
  static navigationOptions ={
    header:null
  }
  render() {
    return (
      <View  >
       <ImageBackground
      source={myBackground}
      style={styles.backgroundImage}
      >
      <Text style={styles.introText}> ReactConf</Text>      
      <Text style={styles.descText}>Two full days of knowledge sharing and community with people who build and LOVE React</Text>   
      <Button  full rounded bordered light style={styles.buttonFront}
      onPress={ ()=> this.props.navigation.navigate('Day1') }>
      <Text style={styles.buttonText}>Lets Go!</Text>
      </Button>
   
      </ImageBackground>      

      </View>
    );
  }
}

const styles={
  backgroundImage:{
    height: '100%',
    width: '100%',
  },
  introText:{
    marginTop:200,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 44,
    marginLeft:15,
    marginBottom:15,
    color: 'white',   
    fontWeight: 'bold' 
  },
  descText:{
    color: 'white',
    fontSize: 20,
    marginLeft: 25,
    marginBottom:30 
  },
  buttonText:{
    color: 'white',
    fontSize: 20,  
  },
  buttonFront:{
    
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
export default Landing;