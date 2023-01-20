import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const AttractionDetails = ({route, navigation}) => {
  const {item} = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={onBack}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
