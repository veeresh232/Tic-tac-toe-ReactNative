import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View ,Image, Text,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import {AppLoading} from 'expo'
import {Entypo} from '@expo/vector-icons';

let itemArray = new Array(9).fill('empty');
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isCross:false,
      winMessage: '',
      buttonMsg :'Go!',
      gameOver :false
    }
  }

  

  drawItem = itemNumber =>{
    //decide what to draw: O or X
    if(!this.state.gameOver)
    {if(itemArray[itemNumber] === 'empty'){
      itemArray[itemNumber] = this.state.isCross;
      this.setState({isCross: !itemArray[itemNumber],buttonMsg:'Reset'})
    }
    //check for win
    this.winGame();}
  }

  chooseItemIcon = itemNumber =>{
    //TODO: choose appropriate icon
    if(itemArray[itemNumber]!== 'empty'){
      return itemArray[itemNumber] ? 'cross' : 'circle';
    }
    return 'pencil';
  }

  chooseItemColor= (itemNumber) => {
    if(itemArray[itemNumber]!== 'empty'){
      return itemArray[itemNumber] ? 'red' : 'green';
    }
    return 'black';
  } 

  resetGame = ()=>{
    //reset the values and state
    itemArray.fill('empty');
    this.setState({winMessage:'',
    buttonMsg:'Go!',
    gameOver:false
  });
    this.forceUpdate();
  }

  winGame = ()=>{

    if((itemArray[0] !== 'empty') && (itemArray[0]== itemArray[1]) && (itemArray[1]== itemArray[2])){
      this.setState({winMessage:(itemArray[0]?'X':'O').concat(' Wins!'),gameOver:true});
    }else if((itemArray[3] !== 'empty') && (itemArray[3]== itemArray[4]) && (itemArray[4]== itemArray[5])){
      this.setState({winMessage:(itemArray[3]?'X':'O').concat(' Wins!'),gameOver:true});
    }else if((itemArray[6] !== 'empty') && (itemArray[6]== itemArray[7]) && (itemArray[7]== itemArray[8])){
      this.setState({winMessage:(itemArray[6]?'X':'O').concat(' Wins!'),gameOver:true});
    }else if((itemArray[0] !== 'empty') && (itemArray[0]== itemArray[3]) && (itemArray[3]== itemArray[6])){
      this.setState({winMessage:(itemArray[0]?'X':'O').concat(' Wins!'),gameOver:true});
    }else if((itemArray[1] !== 'empty') && (itemArray[1]== itemArray[4]) && (itemArray[4]== itemArray[7])){
      this.setState({winMessage:(itemArray[1]?'X':'O').concat(' Wins!'),gameOver:true});
    }else if((itemArray[2] !== 'empty') && (itemArray[2]== itemArray[5]) && (itemArray[5]== itemArray[8])){
      this.setState({winMessage:(itemArray[2]?'X':'O').concat(' Wins!'),gameOver:true});
    }else if((itemArray[0] !== 'empty') && (itemArray[0]== itemArray[4]) && (itemArray[4]== itemArray[8])){
      this.setState({winMessage:(itemArray[0]?'X':'O').concat(' Wins!'),gameOver:true});
    }else if((itemArray[2] !== 'empty') && (itemArray[2]== itemArray[4]) && (itemArray[4]== itemArray[6])){
      this.setState({winMessage:(itemArray[2]?'X':'O').concat(' Wins!'),gameOver:true});
    }

  }


  render(){
   
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>
        Tic Tac Toe
      </Text>
      <View style={Styles.grid}>
        <View style={Styles.row}>
          {new Array(3).fill('').map((value,index)=>{
            return <View key={index} style={Styles.item}>
            <TouchableOpacity onPress={()=> this.drawItem(index)}>
              <Entypo 
              name = {this.chooseItemIcon(index)}
              size ={50}
              color ={this.chooseItemColor(index)}
              />
            </TouchableOpacity>
          </View>
          })}
          
        </View>
        <View style={Styles.row}>
          {new Array(3).fill('').map((value,index)=>{
            return <View key={index} style={Styles.item}>
            <TouchableOpacity onPress={()=> this.drawItem(index+3)}>
              <Entypo 
              name = {this.chooseItemIcon(index+3)}
              size ={50}
              color ={this.chooseItemColor(index+3)}
              />
            </TouchableOpacity>
          </View>
          })}
          
        </View>
        <View style={Styles.row}>          
          {new Array(3).fill('').map((value,index)=>{
            return <View key={index} style={Styles.item}>
            <TouchableOpacity onPress={()=> this.drawItem(index+6)}>
              <Entypo 
              name = {this.chooseItemIcon(index+6)}
              size ={50}
              color ={this.chooseItemColor(index+6)}
              />
            </TouchableOpacity>
          </View>
          })}
          
        </View>
          <Text
          style={Styles.winMessage}
          >{this.state.winMessage}</Text>
          <Button full rounded primary style={Styles.button} onPress={this.resetGame}>
        <Text style={Styles.btnText}>{this.state.buttonMsg}</Text>
          </Button>
      </View>
    </View>
  );
}
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#EAF0F1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grid :{

  },
  row: {
    flexDirection:'row' 
  },
  item:{
    borderWidth: 2,
    borderColor: '#192A56',
    padding: 30
  },
  winMessage:{
    padding:20,
    fontSize : 35,
    fontWeight: 'bold',
    alignContent:'center',
    justifyContent:'center'
  },
  button:{
    margin:20,
    padding:10,
    backgroundColor:'#25CCF7'
  },
  btnText:{
    color:'#fff',
    fontWeight: 'bold'
  },
  title:{
    fontSize:30,
    paddingTop:15,
    fontWeight:'bold',
    paddingBottom:80
  }
})
