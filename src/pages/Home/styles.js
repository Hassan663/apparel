import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;
const widthFlex1 = windowWidth / 10

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: RFPercentage(2)
    },
    circle: (size, color) => ({
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        backgroundColor: color ? color : Colors.primary,
        borderRadius: size / 2
    }),
    headerContainer: {
        height: RFPercentage(10),
        flexDirection: 'row',
        marginTop: RFPercentage(3),
        marginVertical: RFPercentage(1),
        justifyContent: "space-between",
        alignItems: 'center',
    },
    bannerContainer: {
        margin: 1,
        justifyContent: 'flex-end',
    },
    banner: {
        height: "100%",
        width: "100%"
    },
    bannerContentContainer: {
        paddingHorizontal: RFPercentage(3),
        paddingVertical: RFPercentage(3),
        justifyContent: "space-between",
        backgroundColor: Colors.primary,
        width: widthFlex1 * 8,
        overflow: 'hidden',
        height: '80%',
        marginLeft: 19,
        backgroundColor: Colors.primary,
        borderRadius: RFPercentage(2)
    },
    bellStyle: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'flex-end'
    },
    row: {
        width: '100%',
        marginVertical: RFPercentage(3),
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cartContainer: {
        overflow: "hidden",
        marginVertical: RFPercentage(1),
        width: '48%',
    },
    cartHeart: {
        position: "absolute",
        right: '8%',
        top: "5%"
    },
    bannerAbsImg: {
        position: "absolute",
        height: '100%',
        left: '10%',
        width: '100%',
        top: 0, zIndex: 2,
        alignSelf: 'center'
    },
    fullScreenCartContainer: {
        height: 230,
        borderRadius: RFPercentage(2),
        marginVertical: RFPercentage(2)
    },
    fullScreenItemImg: {
        height: "100%",
        width: '100%',
        resizeMode: "cover",
        borderRadius: RFPercentage(3)
    },
    productDetailContainer: {
        height: RFPercentage(10),
        flexDirection: 'row'
    },
    plusIcon: {
        margin: RFPercentage(1),
        color: Colors.black
    },
    inputContainer: {
        height: RFPercentage(9),
        flexDirection: "row",
        alignItems: 'center',
        borderRadius: RFPercentage(2),
        backgroundColor: Colors.inputBg
    },
    searchInput: {
        flex: 1,
        height: "100%",
        fontSize: 14,
        fontWeight: "500"
    },
});