import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

const windowHeight = Dimensions.get('window').height;
const heightFlex1 = windowHeight / 10
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
    inputSection: {
        height: heightFlex1 * 2.6,
        justifyContent: 'center',
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
    logoContainer: {
        height: heightFlex1 * 2,
        marginTop: RFPercentage(5),
        alignItems: 'center'
    },
    scrollContainer: {
        height: heightFlex1 * 10,
    },
    hrLine: {
        width: '45%',
        backgroundColor: Colors.fontColor,
        height: 1
    },
    socialIconContainer: {
        flexDirection: "row",
        width: "45%",
        alignSelf: 'center',
        marginVertical: RFPercentage(2),
        alignItems: "center",
        justifyContent: "space-between"
    },
    hrLineSection: {
        marginVertical: RFPercentage(.5),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
});