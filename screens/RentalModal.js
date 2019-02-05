import React from 'react'
import { Modal, View, Image, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';


export default class RentalModal extends React.Component {

  state = { 
    textPlate:'',
    textBrand:'',
    textRental:''
  }

  pushNewRental() {

    if(this.state.textPlate === '' || this.state.textBrand === '' || this.state.textRental === '' ) {
      Alert.alert('You have to fill in all the spaces.');
    } else {
      if (this.props.rentalsList.find( n => n.nplate === this.state.textPlate )) {
        Alert.alert ('There is another rental with the same Nº Plate.');
      } else {
        this.props.getNewRental({nplate: this.state.textPlate, brand: this.state.textBrand, rentedby: this.state.textRental});
        this.state.textPlate = '';
        this.state.textBrand = '';
        this.state.textRental = '';
      }
    }
  }

  render() {
    return(
      <Modal 
        visible={ this.props.displayModal} 
        onRequestClose={()=> {displayModal: true}}
        animationType = "slide"
        transparent = {true}
        >
          <View style = {styles.modalContainer}>
            <View style = {styles.modalInputs}>
              <View style = {styles.titleContainer}>
                <Text style = {styles.title}>Enter the data</Text>
              </View>

              <View style = {styles.textInputs}>
                <Text style = {styles.textAsk}>Nº Plate:</Text>  
                <TextInput 
                  style = {styles.textAnswer}
                  placeholder = "Type here the new Nº Plate"
                  onChangeText = {(textPlate) => this.setState({textPlate})}
                  value = {this.state.textPlate}
                  />  
                <Text style = {styles.textAsk}>Brand:</Text>  
                <TextInput 
                  style = {styles.textAnswer}
                  placeholder = "Type here the new Brand"
                  onChangeText = {(textBrand) => this.setState({textBrand})}
                  value = {this.state.textBrand}
                  />  
                <Text style = {styles.textAsk}>Rented by:</Text>  
                <TextInput 
                  style = {styles.textAnswer}
                  placeholder = "Type here the new rental"
                  onChangeText = {(textRental) => this.setState({textRental})}
                  value = {this.state.textRental}
                  />  
              </View>

              <View style = {styles.buttons}>
                <Button style = {styles.button}
                  onPress = { this.props.triggerModal }
                  title = "   Cancel   "
                  color = "#ff6666">
                </Button>
                <Button style = {styles.button}
                  onPress = { () => this.pushNewRental() }
                  title = "       Add       ">
                </Button>
              </View>
            </View>
          </View>
      </Modal>
    )
  }    
   

}

const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },
  modalInputs: {
    width: 300,
    height: 500,
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
    marginRight: 10,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  titleContainer: {
    justifyContent: 'center',
    margin: 10,
    marginTop: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 25
  },
  button: {
    width: 100
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20,
    alignItems: 'flex-end',
  },
  textInputs: {
    margin: 20
  },
  textAsk: {
    fontSize: 15,
    marginBottom: 5
  },
  textAnswer: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  }

});
