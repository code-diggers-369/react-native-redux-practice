import {View, Text} from 'react-native';
import React, {useState} from 'react';

//
import {useSelector} from 'react-redux';

//
import CounterView from '../componets/CounterView';
import CounterControllers from '../componets/CounterControllers';

export default function CounterScreen({customValueParentState}) {
  const counter = useSelector(state => state.counter);

  console.log(counter);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CounterView counterValue={counter.count} />
      <CounterControllers />
    </View>
  );
}
