import React from 'react';
import {TextInput} from 'react-native';

export const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        backgroundColor: 'rgb(220,220,220)',
        color: '#006A42',
        width: '80%',
        // marginTop:30,
        
        marginVertical:10,
        textAlign:'center',
        fontSize:15
      }}
      placeholderTextColor={'#006A42'}></TextInput>
  );
};
