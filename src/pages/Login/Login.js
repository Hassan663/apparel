// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  Image,
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import { GoogleSignin, } from '@react-native-google-signin/google-signin';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Title from '../../components/Title';
import Colors from '../../styles/Colors';
import OutlinedTextInput from './Components/OutlinedTextInput';
import Button from '../../components/Button';
import { styles } from './styles';
import { handleLogin } from './Components/CallBack';
import { GoogleSignIn, } from '../../store/action/action';

// GoogleSignin.configure({
//   webClientId:
//     '761704855538-olml0n1e8saf9vmukip0otic5291679s.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
// });
const windowHeight = Dimensions.get('window').height;
const heightFlex1 = windowHeight / 10
const Login = ({ navigation }) => {

  const [email, setEmail] = useState('mynameismuzammilhussainshah@gmail.com');
  const [password, setPassword] = useState('123456');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ height: heightFlex1 * 2.3, marginTop: RFPercentage(5), alignItems: 'center' }}>
          <View style={[styles.circle2(60),]}>
            <Title title={'A'} weight={'600'} color={Colors.white} type={'Poppin-38'} />
          </View>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Title title={'Login to apparel'} weight={'500'} color={Colors.black} type={'Poppin-20'} />
        </View>
        <View style={{
          height: RFPercentage(8), width: "100%", borderRadius: RFPercentage(2), backgroundColor: Colors.white,
          flexDirection: 'row',
        }}>

        </View>

      </ScrollView>
    </SafeAreaView >
  );
};
export default Login;
