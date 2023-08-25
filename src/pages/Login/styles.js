import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: RFPercentage(2)
    },
    circle2: (size, color) => ({
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        backgroundColor: color ? color : Colors.primary,
        borderRadius: size / 2
    }),

    inputStyle: {
        flex: 9,
        fontSize: 16,
        fontWeight: "600",
        height: "100%",
        paddingHorizontal: RFPercentage(1)
    },
    inputContainer: {
        height: RFPercentage(8),
        marginVertical: RFPercentage(2),
        width: "100%",
        borderRadius: RFPercentage(2),
        backgroundColor: Colors.white,
        flexDirection: 'row',
        paddingHorizontal: RFPercentage(1),
        alignItems: "center"
    },
    inputIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selfCenter: { alignSelf: "center" },
    btnWrapper: {
        height: 55,
        width: "100%",
        marginVertical: RFPercentage(2)
    },
    rowWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 1,
        bottom: RFPercentage(2),
    },

});