import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window');

const AttractionDetails = ({route, navigation}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images.length ? item?.images[0] : null;

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Wrapper>
        <ImageBackground source={{uri: mainImage}} />
      </Wrapper>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={onBack}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);

const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: ${height / 2}px;
`;

const Wrapper = styled.View`
  margin: 32px;
  border-radius: 20px;
  overflow: hidden;
`;
