import 'jsdom-global/register';
import 'react-native';
import React from 'react';
import RentalScreen from '../screens/RentalsScreen';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ReactTestUtils from 'react-dom/test-utils'; 
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// tslint:disable-next-line:no-any
Enzyme.configure({ adapter: new Adapter() });

describe('Rental Screen test', () => {

  let component, rental, displayModal;
  
  beforeEach (() => {
    
    rental = {
      nplate: "187549",
      brand: "BMW",
      rentedby: "Sherlock"
    }

  })

  beforeEach (() => { 
    handleDisplayClick = jest.fn();
    handleDisplayClick.mockReturnValue(true);
    component = mount(<RentalScreen rental = {rental} displayModal={ handleDisplayClick }/>);  
  })


  it('should open RentalModal when clicked', () => {
    const button = component.find('Button').find('[title="Add New Rental"]');
    button.simulate('click');
    expect(handleDisplayClick.mock.calls.length).toEqual(1);
    expect(displayModal.mock.calls).toBeTruthy();
  });
});