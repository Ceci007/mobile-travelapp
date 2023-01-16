import React from 'react';
// import {Text} from 'react-native';
import styled from 'styled-components/native';
import Categories from '../components/Categories';
import Title from '../components/Title';

const HomeScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Title subtitle="Where do" title="You want to go?" />
        <Categories
          selectedCategory="All"
          categories={[
            'All',
            'Popular',
            'Historical',
            'Recomended',
            'Most Viewed',
            'Most Visited',
          ]}
        />
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Wrapper = styled.View`
  padding: 32px 32px;
`;
