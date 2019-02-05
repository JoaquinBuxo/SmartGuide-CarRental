import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Button, Modal } from 'react-native';

import RentalModal from './RentalModal';


export default class RentalsScreen extends React.Component {
  

  state = { 
  	displayModal: false,
  	rentalsList: [
      { nplate: "187549", brand: "BMW", rentedby: "Sherlock"},
      { nplate: "272849", brand: "Batmobile", rentedby: "Batman"},
      { nplate: "393275", brand: "VolksWagen", rentedby: "Hippie"}
    ]
  }

  static navigationOptions = {
    title: 'Rentals',
  };

  triggerModal() {
	this.setState(prevState => {
      return {
        displayModal: !this.state.displayModal
      }
	});
  }

  getNewRental( newRental ) {
    this.setState(prevState => {
    	return {
    		rentalsList: [...this.state.rentalsList, newRental]
    	}
    });
    this.triggerModal();
  }

  render() {
    
    

    return (
    	<View style={styles.container}>

	      <ScrollView>
	        
	        {this.state.rentalsList.map((item) => {
	          return (

	            <View 
	              key = {item.nplate}
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
	                paddingLeft: 20
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
	                paddingLeft: 30,
	                paddingRight: 10
	              }}>
	                <Text>Nº Plate: {item.nplate} </Text>
	                <Text>Brand: {item.brand}</Text>
	                <Text>Rented by: {item.rentedby}</Text>
	              </View>

	              <View style={{
	                flex: 1,
	                justifyContent: 'space-around', 
	                alignItems: 'center', 
	                alignContent: 'center',
	                paddingRight: 20
	              }}>
	                <Image source={require('../assets/images/car.png')}
	                  style={{
	                    width: 80,
	                    height: 80,
	                    resizeMode: 'contain'
	                  }}
	                />
	              </View>

	            </View>
	          );

	        })}

	      </ScrollView>
          
	      <Button 
	        onPress = { () => this.triggerModal() }
	        title = "Add New Rental">
	      </Button>
	      <RentalModal displayModal = {this.state.displayModal} rentalsList = {this.state.rentalsList} triggerModal = { () => this.triggerModal() } getNewRental = { this.getNewRental.bind(this) }/>

		</View>
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