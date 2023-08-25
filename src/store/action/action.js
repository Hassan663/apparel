import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ActionTypes from '../constant/constant';


export const addItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Item added successfully.');
  } catch (error) {
    console.error('Error adding item:', error);
  }
};

export const deleteItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Item deleted successfully.');
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};


export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Item retrieved successfully:');
      return value;
    } else {
      console.log('Item not found.');
      return null;
    }
  } catch (error) {
    console.error('Error getting item:', error);
    return null;
  }
};
