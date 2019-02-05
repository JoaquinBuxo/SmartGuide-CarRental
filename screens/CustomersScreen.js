import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

export default class CustomersScreen extends React.Component {
  static navigationOptions = {
    title: 'Customers',
  };

  render() {

    const customersList = [
      { id: "1", name: "Sherlock", brand: "BMW"},
      { id: "2", name: "Batman", brand: "Batmobile"},
      { id: "3", name: "Hippie", brand: "VolksWagen"},
      { id: "4", name: "Sherlock", brand: "BMW"},
      { id: "5", name: "Batman", brand: "Batmobile"},
      { id: "6", name: "Hippie", brand: "VolksWagen"},
      { id: "7", name: "Sherlock", brand: "BMW"},
      { id: "8", name: "Batman", brand: "Batmobile"},
      { id: "9", name: "Hippie", brand: "VolksWagen"},
    ];

    return (
      <ScrollView style={styles.container}>
        
        {customersList.map((item) => {
          return (
            <View 
              key = {item.id}
              style={{
              height: 100,
              flexDirection: 'row', 
              justifyContent: 'space-around', 
              alignItems: 'center', 
              alignContent: 'center',
              marginBottom: 10,
              borderWidth: 1,
              borderRadius: 2,
              borderColor: '#ddd',
              borderBottomWidth: 0,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 1,
              marginLeft: 10,
              marginRight: 10
            }}>

              <View style={{
                flex: 1,
                justifyContent: 'space-around', 
                alignItems: 'center', 
                alignContent: 'center',
              }}>
                <Image source={require('../assets/images/user.png')}
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain'
                  }}
                />
              </View>

              <View style={{
                flex: 2,
                flexDirection: 'column', 
                justifyContent: 'space-around',
                alignContent: 'center',
              }}>
                <Text>Id: {item.id} </Text>
                <Text>Name: {item.name}</Text>
                <Text>Favourite Brand: {item.brand}</Text>
              </View> 

            </View>
          )

        })}
        
      <View style = {{ height: 25 }} ></View>
      
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
});
