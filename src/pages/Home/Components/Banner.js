// @app
import React from 'react';
import {
    View,
    Image,
} from 'react-native';

import Colors from '../../../styles/Colors';
import Title from '../../../components/Title';
import { styles } from '../styles';

export const Banner = () => {
    return (
        <View style={styles.bannerContainer} >
            <View style={styles.bannerAbsImg}>
                <Image
                    source={require('../../../assets/men.png')}
                    resizeMode='contain'
                    style={styles.banner} />
            </View>
            <View style={styles.bannerContentContainer}>
                <Title
                    title={`men`}
                    color={Colors.white}
                    type={`Poppin-25`}
                    weight={`700`} />
            </View>
        </View>)
}
