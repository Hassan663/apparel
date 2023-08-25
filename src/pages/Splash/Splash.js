// @app
import React from 'react';
import {
  View,
  Image,
} from 'react-native';

import { styles } from './styles';
import { useEffect } from 'react';
import Title from '../../components/Title';
import Colors from '../../styles/Colors';

const Splash = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Login')
  //   }, 1000);
  // }, [])
  return (
    <View style={styles.container}>
      <Title title={'Apparel'} weight={'600'} color={Colors.white} type={'Poppin-42'} />
    </View >
  );
};
export default Splash;
