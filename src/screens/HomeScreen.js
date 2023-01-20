import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import AttractionCard from '../components/AttractionCard';
import Categories from '../components/Categories';
import Title from '../components/Title';
import jsonData from '../data/attractions.json';
import categories from '../data/categories.json';

const ALL = 'All';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );
      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flexGrow: 1}}
        keyExtractor={item => String(item?.id)}
        data={data}
        numColumns={2}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: 'center',
              marginTop: 40,
              fontSize: 12,
              color: 'rgba(0,0,0, 0.5)',
            }}>
            No items found
          </Text>
        }
        ListHeaderComponent={
          <>
            <View style={{margin: 32}}>
              <Title subtitle="Where do" title="You want to go?" />
            </View>
            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[ALL, ...categories]}
            />
          </>
        }
        renderItem={({item, index}) => (
          <AttractionCard
            key={item.id}
            index={index}
            title={item.name}
            imageSrc={item.images?.length ? item.images[0] : null}
            subtitle={item.city}
            onPress={() => navigation.navigate('AttractionDetails', {item})}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
