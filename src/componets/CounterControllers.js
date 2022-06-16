import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CounterControllers({}) {
  const incrementValue = () => {};
  const decrementValue = () => {};
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '70%',
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 10}}
        onPress={() => decrementValue()}>
        <Text style={{fontSize: 20, color: 'white'}}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 10}}
        onPress={() => incrementValue()}>
        <Text style={{fontSize: 20, color: 'white'}}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}
