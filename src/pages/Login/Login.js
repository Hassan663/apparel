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
  Dimensions,
  Text,
  TextInput
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
// import { GoogleSignin, } from '@react-native-google-signin/google-signin';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/EvilIcons';

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
      <ScrollView contentContainerStyle={{ height: heightFlex1 * 10, }}>
        <View style={{ height: heightFlex1 * 2, marginTop: RFPercentage(5), alignItems: 'center' }}>
          <View style={[styles.circle2(60),]}>
            <Title title={'A'} weight={'600'} color={Colors.white} type={'Poppin-38'} />
          </View>
        </View>
        <View style={styles.selfCenter}>
          <Title title={'Login to apparel'} weight={'500'} color={Colors.black} type={'Poppin-20'} />
        </View>
        <View style={{ height: heightFlex1 * 2.6, justifyContent: 'center', }}>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <Icon name={`user`} color={Colors.fontColor} size={RFPercentage(5)} />
            </View>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={Colors.fontColor}
              placeholder='user name'
              style={styles.inputStyle} />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <Feather
                name={`lock`}
                color={Colors.fontColor}
                size={RFPercentage(3.5)} />

            </View>
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor={Colors.fontColor}
              placeholder='Password'
              style={styles.inputStyle} />
          </View>
          <View style={styles.selfCenter}>
            <Title title={'Forgot Password?'} weight={'500'} color={Colors.black} type={'Poppin-14'} />
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <Button
            //  callBack={() => handleLogin(email, password, navigation)}
            title={'Login'} primary />
        </View>
        <View style={{
          marginVertical: RFPercentage(.5),
          flexDirection: "row",
          alignItems: "center", justifyContent: "space-between"
        }}>
          <View style={{ width: '45%', backgroundColor: Colors.fontColor, height: 1 }} />
          <Title title={'Or'} weight={'500'} color={Colors.fontColor} type={'Poppin-14'} />
          <View style={{ width: '45%', backgroundColor: Colors.fontColor, height: 1 }} />
        </View>
        <View style={{
          flexDirection: "row", width: "45%", alignSelf: 'center',
          marginVertical: RFPercentage(2),
          alignItems: "center", justifyContent: "space-between"
        }}>
          <View style={[styles.circle2(36, Colors.fbBlue),]}>
            <EvilIcons name={`sc-facebook`} color={Colors.white} size={RFPercentage(4)} />
          </View>
          <View style={[styles.circle2(36, Colors.red),]}>
            <AntDesign name={`googleplus`} color={Colors.white} size={RFPercentage(4)} />
          </View>
          <View style={[styles.circle2(36, Colors.black),]}>
            <AntDesign name={`apple1`} color={Colors.white} size={RFPercentage(3.5)} />
          </View>
        </View>
        <View style={styles.rowWrapper}>
          <Title
            title={`Don’t have an account? `}
            color={Colors.gray}
            weight={'400'}
            type={'Poppin-14'} />
          <TouchableOpacity
            activeOpacity={.8}
            onPress={() => navigation.navigate('Signup')}>
            <Title
              title={`Sign up`}
              color={Colors.primary}
              weight={'600'}
              type={'Poppin-14'} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};
export default Login;
