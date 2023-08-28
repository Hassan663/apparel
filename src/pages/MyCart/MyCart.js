// @app
import React from 'react';
import {
    SafeAreaView,
    Dimensions
} from 'react-native';

import { styles } from './styles';

const windowWidth = Dimensions.get('window').width;

const MyCart = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

        </SafeAreaView >
    );
};
export default MyCart;
