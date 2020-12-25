import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View ,Image} from 'react-native';
import { Container, Header, Content,Text, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import {AppLoading} from 'expo'


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }
  async componentDidMount(){
   await Expo.Font.loadAsync({
      Roboto : require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium : require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({isLoading:false});
  }

  render(){
    if(this.state.isLoading){
      return <AppLoading />;
    }
  return (
    <Container>
    <Header />
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://scontent.fblr5-1.fna.fbcdn.net/v/t1.0-9/119172165_3298068640274712_2171155829147420443_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=RM0VpVRcfJsAX9735QG&_nc_ht=scontent.fblr5-1.fna&oh=f58545930de91ed4815c7122d49befea&oe=5F96A023'}} />
            <Body>
              <Text>Veeresh M</Text>
              <Text note>Photographer | Coder</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'https://c.wallhere.com/photos/3f/cf/5472x3648_px_Code_coffee_computer_Computer_Screen_Keyboards_Languages_laptop-1288593.jpg!d'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comment</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  </Container>
  );
}
}


