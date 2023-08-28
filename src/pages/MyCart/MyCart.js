// @app
import React, { useEffect } from 'react';
import {
    View,
    Image,
    SafeAreaView,
    TextInput,
    ScrollView,
    FlatList,
    Dimensions
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';
import firestore from '@react-native-firebase/firestore';

import Colors from '../../styles/Colors';
import Title from '../../components/Title';
import { styles } from './styles';
import { ArrivalCart } from './Components/ArrivalCart';
import { Banner } from './Components/Banner';
import { data } from './DummyData';
// import { getNewArrivals } from '../../store/action/action';
import { useDispatch, useSelector } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const widthFlex1 = windowWidth / 10

const MyCart = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

        </SafeAreaView >
    );
};
export default MyCart;
