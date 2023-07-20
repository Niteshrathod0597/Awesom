import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background';
import {Field} from './Field';
import Btn from './Btn';

const SignUp = (props) => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 411}}>
        <Text
          style={{
            color: 'white',
            fontSize: 65,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 380,
            marginVertical: 20,
            borderRadius: 30,
            alignItems: 'center',
            paddingTop: 50,
          }}>
          <Text style={{fontSize: 30, color: '#006A42', fontWeight: 'bold'}}>
            Create an Account
          </Text>
          <Text style={{fontSize: 20, color: 'grey', fontWeight: 'bold'}}>
            Register to Login
          </Text>
          <Field placeholder="FirstName" />
          <Field placeholder="LastName" />
          <Field placeholder="Username" />
          <Field placeholder="Email" />
          <Field placeholder="Password"  />
          
          <Btn textColor='white' bgColor='#006A42' btnLabel='Sign Up' Press={()=>alert('Account registered' )} />
          <View style={{display:'flex', flexDirection:'row' }}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Already have an account ?</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>

            <Text style={{fontSize:17, fontWeight:'bold', color:'#066A42'}} >Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default SignUp;
