import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.white,
        paddingHorizontal: RFPercentage(2)
    },

    circle2: (size) => ({
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        backgroundColor: Colors.primary,
        borderRadius: size / 2
    }),
});