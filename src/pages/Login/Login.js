// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity,
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
const Login = ({ navigation }) => {

  const [email, setEmail] = useState('mynameismuzammilhussainshah@gmail.com');
  const [password, setPassword] = useState('123456');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.logoContainer}>
          <View style={[styles.circle2(60),]}>
            <Title
              title={'A'}
              weight={'600'}
              color={Colors.white}
              type={'Poppin-38'} />
          </View>
        </View>

        <View style={styles.selfCenter}>
          <Title
            title={'Login to apparel'}
            weight={'500'}
            color={Colors.black}
            type={'Poppin-20'} />
        </View>

        <View style={styles.inputSection}>
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

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ForgetPass')}
            style={styles.selfCenter}>
            <Title
              title={'Forgot Password?'}
              weight={'500'}
              color={Colors.black}
              type={'Poppin-14'} />
          </TouchableOpacity>

        </View>
        <View style={styles.btnWrapper}>

          <Button
            //  callBack={() => handleLogin(email, password, navigation)}
            title={'Login'} primary />
        </View>
        <View style={styles.hrLineSection}>
          <View style={styles.hrLine} />
          <Title
            title={'Or'}
            weight={'500'}
            color={Colors.fontColor}
            type={'Poppin-14'} />
          <View style={styles.hrLine} />
        </View>
        <View style={styles.socialIconContainer}>
          <View style={styles.circle2(36, Colors.fbBlue)}>
            <EvilIcons name={`sc-facebook`} color={Colors.white} size={RFPercentage(4)} />
          </View>
          <View style={styles.circle2(36, Colors.red)}>
            <AntDesign name={`googleplus`} color={Colors.white} size={RFPercentage(4)} />
          </View>
          <View style={styles.circle2(36, Colors.black)}>
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
