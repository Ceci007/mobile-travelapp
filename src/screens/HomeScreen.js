import React, {useState} from 'react';
// import {Text} from 'react-native';
import styled from 'styled-components/native';
import AttractionCard from '../components/AttractionCard';
import Categories from '../components/Categories';
import Title from '../components/Title';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <Container>
      <Wrapper>
        <Title subtitle="Where do" title="You want to go?" />
        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[
            'All',
            'Popular',
            'Historical',
            'Recomended',
            'Most Viewed',
            'Most Visited',
          ]}
        />
        <CardWrapper>
          <AttractionCard
            title="Taj Mahal"
            imageSrc="https://www.kids-world-travel-guide.com/images/tajmahal_500.jpg"
            subtitle="India"
          />
          <AttractionCard
            title="Taj Mahal"
            imageSrc="https://www.kids-world-travel-guide.com/images/tajmahal_500.jpg"
            subtitle="India"
          />
        </CardWrapper>
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

const CardWrapper = styled.View`
  flex-direction: row;
`;
