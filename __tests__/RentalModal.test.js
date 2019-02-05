import 'jsdom-global/register';
import "react-native-mock-render/mock";
import 'react-native';
import React from 'react';
import RentalModal from '../screens/RentalModal';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ReactTestUtils from 'react-dom/test-utils'; 
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// tslint:disable-next-line:no-any
Enzyme.configure({ adapter: new Adapter() });

describe('Rental Modal test', () => {

  let component, newRentals, displayModal;
  
  beforeEach (() => { 
    
    newRentals = [

      {
        nplate: "187349",
        brand: "Benz",
        rentedby: "Holmes"
      },
      {
        nplate: "217349",
        brand: "Benz",
        rentedby: ""
      },
      {
        nplate: "187349",
        brand: "Mitsubushi",
        rentedby: "Robin"
      },

    ]

  })

  beforeEach (() => { 

    handleAddClick = jest.fn();
    component = mount(<RentalModal rentals = { newRentals } displayModal={ handleAddClick }/>);
    
  });

  it('should close RentalModal when clicked', () => {
      const button = component.find('Button').find('[title="   Cancel   "]');
      button.simulate('click');
      expect(handleAddClick.mock.calls.length).toEqual(1);
      expect(displayModal.mock.calls).toBeFalsy();
  });

  it('text plate should not exist (because is id) ', () => {
    const button = component.find('Button').find('[title="       Add       "]');
    button.simulate('click');
    expect(handleAddClick.mock.calls.length).toEqual(1);
    expect(component).toBeTruthy();
    expect(component.props().newRentals).add(newRental);
  });
  
  it('text plate should NOT to be empty ', () => {
    const button = component.find('Button').find('[title="       Add       "]');
    button.simulate('click');
    const newRental = component.find('TextInput').first().set('12345');
    expect(handleAddClick.mock.calls.length).toEqual(1);
    expect(newRentals.find(newRental.nplate === '')).toBeFalsy();
    expect(component.props().newRentals).add(newRental);
  });

});
