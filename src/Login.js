import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background';
import {Field} from './Field';
import Btn from './Btn';
import OnboardingScreen from './OnboardingScreen';

const Login = props => {
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
            Welcome Back..!!
          </Text>
          <Text style={{fontSize: 20, color: 'grey', fontWeight: 'bold'}}>
            Login to your account
          </Text>
          <Field placeholder="Email / Username" />
          <Field placeholder="Password" secureTextEntry={true} />
          <View style={{alignItems: 'flex-end', width: '80%'}}>
            <Text style={{fontSize: 15, color: '#006A42', fontWeight: 'bold'}}>
              Forgot Password ?
            </Text>
          </View>

          {/* Button alert to onboard */}

          <Btn
            textColor="white"
            bgColor="#006A42"
            btnLabel="Login"
            Press={() => alert('succusfully logged in')}
            onPress={() => props.navigation.navigate('SignUp')}
          />
          {/* ---login bth to onboarding */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate('OnboardingScreen')}>
            <Text style={{fontSize: 27, fontWeight: 'bold', color: '#066A42'}}>
              Login
            </Text>
          </TouchableOpacity>

          {/* Dont have Account */}

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Dont Have an account ?
            </Text>

            {/* Sign Up */}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#066A42'}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
