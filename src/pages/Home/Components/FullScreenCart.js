// @app
import React, { useState } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import Title from '../../../components/Title';
import Colors from '../../../styles/Colors';
import { styles } from '../styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const FullScreenCart = ({ item }) => {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <>
            <View style={styles.fullScreenCartContainer}>
                <Image style={styles.fullScreenItemImg} source={require('../../../assets/fullScreenItem1.png')} />
                <TouchableOpacity
                    onPress={() => setIsLiked(!isLiked)}
                    activeOpacity={0.8}
                    style={[styles.circle(RFPercentage(5), Colors.white), styles.cartHeart]}>
                    {isLiked ?
                        <AntDesign name={`heart`} color={Colors.primary} size={RFPercentage(2.5)} />
                        :
                        <AntDesign name={`hearto`} color={Colors.primary} size={RFPercentage(2.5)} />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.productDetailContainer}>
                <View style={{ flex: 1 }}>
                    <Title
                        type={'Poppin-20'}
                        color={Colors.black}
                        weight={'500'}
                        title={`Olive Zip-Front Jacket`} />
                    <Title
                        type={'Poppin-18'}
                        color={Colors.fontColor}
                        weight={'500'}
                        title={`Rs. 3,499`} />
                </View>
                <TouchableOpacity activeOpacity={0.8} >
                    <Entypo
                        name={`plus`}
                        style={styles.plusIcon}
                        size={RFPercentage(4)} />
                </TouchableOpacity>
            </View>
        </>
    );
}; 
