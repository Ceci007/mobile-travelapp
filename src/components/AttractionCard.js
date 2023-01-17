import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

const AttractionCard = ({imageSrc, title, subtitle, index}) => {
  return (
    <CardContainer m={index % 2 === 0 ? 'margin-right' : 'margin-none'}>
      <CardImage source={{uri: imageSrc}} />
      <Wrapper>
        <Title>{title}</Title>
        <SubtitleBox>
          <IconImage source={require('../assets/location.png')} />
          <Subtitle>{subtitle}</Subtitle>
        </SubtitleBox>
      </Wrapper>
    </CardContainer>
  );
};

export default React.memo(AttractionCard);

const CardImage = styled.Image`
  width: ${(width - 96) / 2}px;
  height: 100px;
  border-radius: 20px;
  margin: 0 auto;
  margin-bottom: 12px;
`;

const CardContainer = styled.View`
  padding: 5px;
  border-radius: 15px;
  background: #fff;
  width: ${(width - 72) / 2}px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-right: ${({m}) => (m == 'margin-right' ? '8px' : '0')};
  margin-bottom: 8px;
  margin-left: ${({m}) => (m == 'margin-right' ? '32px' : '0')};
`;

const Wrapper = styled.View`
  padding: 6px;
`;

const Title = styled.Text`
  font-size: 12px;
  font-weight: 600;
  line-height: 14.52px;
  margin-bottom: 4px;
`;

const SubtitleBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconImage = styled.Image`
  width: 10px;
  height: 10px;
  margin-right: 4px;
`;

const Subtitle = styled.Text`
  font-size: 10px;
  font-weight: 300;
  line-height: 9.68px;
  color: rgba(0, 0, 0, 0.5);
`;
