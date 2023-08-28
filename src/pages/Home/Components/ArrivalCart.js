// @app
import React, { useState } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'

import Title from '../../../components/Title';
import Colors from '../../../styles/Colors';
import { styles } from '../styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const ArrivalCart = ({ item, navigation, selectedProduct, category }) => {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={styles.cartContainer}>
            <View style={styles.cartImg}>
                <Image source={require('../../../assets/item1.png')} style={styles.cartImg} resizeMode='contain' />
            </View>
            <TouchableOpacity
                onPress={() => setIsLiked(!isLiked)}
                activeOpacity={0.8}
                style={[styles.circle(RFPercentage(4), Colors.white), styles.cartHeart]}>
                {isLiked ?
                    <AntDesign name={`heart`} color={Colors.primary} size={RFPercentage(2)} />
                    :
                    <AntDesign name={`hearto`} color={Colors.primary} size={RFPercentage(2)} />
                }
            </TouchableOpacity>
            <Title
                title={`Olive Zip-Front Jacket`}
                weight={'600'}
                color={Colors.black}
                type={'Poppin-14'} />
            <Title
                title={`Rs. 3,999`}
                weight={'400'}
                color={Colors.fontColor}
                type={'Poppin-11'} />
        </TouchableOpacity>
    );
}; 
