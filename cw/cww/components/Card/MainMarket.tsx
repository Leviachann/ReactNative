import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { styles } from './style';

const mockProducts = [
  {
    userId: 1,
    id: 1,
    title: "Item #1 Name Goes Here",
    price: "$19.99",
  },
  {
    userId: 1,
    id: 2,
    title: "Item #2 Name Goes Here",
    price: "$19.99",
  },
  {
    userId: 1,
    id: 3,
    title: "Item #3 Name Goes Here",
    price: "$19.99",
  },
  {
    userId: 1,
    id: 4,
    title: "Item #4 Name Goes Here",
    price: "$19.99",
  },
];

const Card = () => {
  return (
    <ScrollView>
      <Market />
    </ScrollView>
  );
};

const Market = () => {
  return (
    <View>
      <MainBar></MainBar>
      <Text style={styles.sectionTitle}>Hot Deals</Text>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={mockProducts}
        renderItem={({ item }) => <Product product={item} />}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{ paddingLeft: 16 }} 
      />

      <Text style={styles.sectionTitle}>Trending</Text>
      
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={mockProducts}
        renderItem={({ item }) => <Product product={item} />}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{ paddingLeft: 16 }} 
      />
      <Text style={styles.sectionTitle}>Deals</Text>
      
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={mockProducts}
        renderItem={({ item }) => <Product product={item} />}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{ paddingLeft: 16 }} 
      />
    </View>
    
  );
};

const Product = ({ product }: any) => {
  return (
    <View style={styles.collection}>
      <View style={styles.block}></View>
      <Text>{product.title}</Text>
      <Text style={styles.itemPrice}>{product.price}</Text>
    </View>
  );
};
const MainBar= ()=>{
  return(
    <View style={styles.contCont}>      
    <View 
      style={styles.containerSearch}
    >
      <Text style={styles.back}>Back</Text>
      <Text style={styles.feed}>Market</Text>
      <Text style={styles.back}>Filter</Text>
    </View>
    <Text style={styles.search}>Search</Text>
    </View>
  );
};
export default Card;
