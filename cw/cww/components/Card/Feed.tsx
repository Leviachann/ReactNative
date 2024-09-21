import React from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import { styles } from './style';

const Card = () => {
  return (
    <ScrollView>
      <View>
      <MainBar></MainBar>
      <VerticalPost></VerticalPost>
      <VerticalPost></VerticalPost>
      <VerticalPost></VerticalPost>
      <VerticalPost></VerticalPost>
      <BigPost></BigPost>
    </View >
    </ScrollView>
    
  );
};
const MainBar= ()=>{
  return(
    <View style={styles.contCont}>      
    <View 
      style={styles.containerSearch}
    >
      <Text style={styles.back}>Back</Text>
      <Text style={styles.feed}>Feed</Text>
      <Text style={styles.back}>Filter</Text>
    </View>
    <Text style={styles.search}>Search</Text>
    </View>
  );
};
const VerticalPost= ()=>{
  return(
    <View 
    style={styles.container}
  >
      <View style={styles.imageContainer}>
          <Image />
      </View>
      <View>
        <View style={
          styles.topContainer}>
          <Text style={ styles.title}>Header</Text>
          <Text style={styles.time}>8m ago</Text>
        </View>
        <Text style={styles.content}>
          He'll want to use your yacht, and I don't 
          want this thing smelling like fish. 
        </Text>
      </View>
      
  </View>
  );
};
const BigPost = () => {
  return (
    <View>
  <Image style={styles.bigImageContainer}></Image>
    <View style={styles.contentscont}>
          <View style={
            styles.topContainer}>
            <Text style={ styles.title}>Header</Text>
          </View>
          <Text style={styles.contents}>
            He'll want to use your yacht, and I don't 
            want this thing smelling like fish. 
          </Text>
          <Text style={styles.time}>8m ago</Text>
    </View>
</View>
  );
};
export default Card;
