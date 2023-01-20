import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  const renderItem = ({item, index}) => {
    return (
      <Wrapper onPress={() => onCategoryPress(item)} key={index}>
        <Text
          style={[
            selectedCategory === item
              ? {
                  fontWeight: 600,
                  color: '#000',
                }
              : {},
          ]}>
          {item}
        </Text>
        {selectedCategory === item && <BottomActive />}
      </Wrapper>
    );
  };
  return (
    <FlatList
      horizontal={true}
      style={{marginHorizontal: 32}}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => String(item)}
    />
  );
};

export default React.memo(Categories);

const Wrapper = styled.Pressable`
  align-items: center;
  justify-content: center;
  margin-right: 17px;
  margin-bottom: 16px;
`;

const Text = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  padding-bottom: 3px;
`;

const BottomActive = styled.View`
  width: 100%;
  height: 3px;
  background: #045ffe;
`;
