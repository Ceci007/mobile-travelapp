import React from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  Image,
  View,
  Pressable,
} from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window');

const AttractionDetails = ({route, navigation}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;

  console.log(item?.images);
  const onBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Wrapper>
        <ImageBackground source={{uri: mainImage}}>
          <ImageBox>
            <Pressable hitSlop={8} onPress={onBack}>
              <Image
                style={{width: 36, height: 36}}
                source={require('../assets/back.png')}
              />
            </Pressable>
            <Pressable hitSlop={8}>
              <Image
                style={{width: 36, height: 36}}
                source={require('../assets/share.png')}
              />
            </Pressable>
          </ImageBox>
        </ImageBackground>
      </Wrapper>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {item?.imgaes?.length
          ? item?.images?.map(image => (
              <Image
                style={{width: 40, height: 40, backgroundColor: '#000'}}
                key={image}
                source={{uri: image}}
              />
            ))
          : null}
      </View>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);

const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: ${height / 2}px;
  position: relative;
  z-index: -1;
`;

const Wrapper = styled.View`
  margin: 32px;
  border-radius: 20px;
  overflow: hidden;
`;

const ImageBox = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
