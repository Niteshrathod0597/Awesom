import * as React from 'react';
import { View, Text } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';

function Home(props) {
    return (
      <Background >
        <View style={{ marginVertical:40, alignItems:'center'}}>
          <Text style={{color:'white', fontSize:60,}}>Let's Start</Text>
          <Text style={{color:'white', fontSize:80}}>Bruz</Text>
        </View>
        <Btn btnLabel='Login' bgColor={darkGreen} textColor='white' Press ={()=>props.navigation.navigate('Login')} />
        <Btn btnLabel='Sign Up' bgColor='white' textColor={darkGreen} Press ={()=>props.navigation.navigate('SignUp')} />
      </Background>
    );
  }

  export default Home;