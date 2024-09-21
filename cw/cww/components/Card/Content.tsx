import React from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import { styles } from './style';

const Card = () => {
  return (
    <ScrollView>
      <View>
      <MainBar></MainBar>
      <BigPost></BigPost>
      <ThreeDots></ThreeDots>
      <BigPost></BigPost>
      <ThreeDots></ThreeDots>
      <BigPost></BigPost>
      <ThreeDots></ThreeDots>
    </View >
    </ScrollView>
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
const ThreeDots = () => {
  return (
    <View style={styles.dotcont}>
    <View style={styles.dotActive} />
    <View style={styles.dot} />
    <View style={styles.dot} />
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
      <Text style={styles.feed}>Content</Text>
      <Text style={styles.back}>Filter</Text>
    </View>
      <Text style={styles.search}>Search</Text>
    </View>
  );
};
export default Card;
