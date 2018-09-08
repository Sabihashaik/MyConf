import * as React from 'react';
import { Text, View,ScrollView, ImageBackground,Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
var myBackground=require('../assets/icons/sunset.png')


export class Day1 extends React.Component {
  render() {
    return (
       <ImageBackground
      source={myBackground}
      style={styles.backgroundImage}
      >
      <ScrollView>
        <Card >
            <CardItem >      
                <Body>            
                  <Text style={styles.cardEventName}>Registration & Check In</Text>
                  <Text note>Head to the Registration Desk to Register!</Text>
                  <Text>Time: 6:00 pm</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: "https://images.unsplash.com/photo-1522202757859-7472b0973c69?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b572f100e7f9e458067066ed3171acc7&auto=format&fit=crop&w=1950&q=80"}} style={{height: 200, width: null, flex: 1}}/>            
            </CardItem>                       
          </Card>
          <Card>
            <CardItem>      
                <Body>            
                  <Text style={styles.cardEventName}>Welcome Reception
</Text>
                  <Text note>Meet New People & Network! </Text>
                  <Text>Time: 8:00 pm</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: "https://images.unsplash.com/photo-1522202757859-7472b0973c69?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b572f100e7f9e458067066ed3171acc7&auto=format&fit=crop&w=1950&q=80"}} style={{height: 200, width: null, flex: 1}}/>            
            </CardItem>           
            
          </Card>
      </ScrollView>
      </ImageBackground>
    );
  }
}

export class Day2 extends React.Component {   
  render() {
    return (
       <ImageBackground
      source={myBackground}
      style={styles.backgroundImage}
      >
    <ScrollView>
     <Card>
            <CardItem>      
                <Body>            
                  <Text style={styles.cardEventName}>Registration
          </Text>
                  <Text note>Head to the Registration Desk to Register! </Text>
                  <Text>Time: 7:00 am</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: "https://images.unsplash.com/photo-1522202757859-7472b0973c69?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b572f100e7f9e458067066ed3171acc7&auto=format&fit=crop&w=1950&q=80"}} style={{height: 200, width: null, flex: 1}}/>            
            </CardItem>           
            
          </Card>
          <Card>
            <CardItem>      
                <Body>            
                  <Text style={styles.cardEventName}>Talks
          </Text>
                  <Text note>Attend Talks by various noted Speakers </Text>
                  <Text>Time: 9:00 am</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: "https://images.unsplash.com/photo-1522202757859-7472b0973c69?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b572f100e7f9e458067066ed3171acc7&auto=format&fit=crop&w=1950&q=80"}} style={{height: 200, width: null, flex: 1}}/>            
            </CardItem>           
            
          </Card>
      </ScrollView>
      </ImageBackground>
    ); 
  }
}
export default createBottomTabNavigator({
  dayone: {
    navigationOptions: {
    tabBarLabel: 'Day 1', 
    tabBarIcon: () =>(
      <Icon name="logo-github" size={24}/>
    )
    },
    screen: Day1,
  }, 
  daytwo:{
    screen: Day2,
    navigationOptions: {
    tabBarLabel: 'Day 2',
    tabBarIcon: ({tintColor}) =>(
      <Icon name="logo-javascript" size={24}/>
    )
    }
}
});

const styles={
  cardStyle:{
      marginLeft: 50,
      marginRight: 50,
      backgroundColor: 'red' 
  },
  cardEventName:{
    flex:1,
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 30,
    justifyContent: 'center'
  },
  img: {
		height: 200,
		width: 310,
		justifyContent: 'center',
		alignItems: 'center'
	},
   backgroundImage:{
    height: '100%',
    width: '100%'
  },
}