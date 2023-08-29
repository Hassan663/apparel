// @app
import React, {
  useState
} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';
import Title from '../../components/Title';
import { styles } from './styles';
import { ArrivalCart } from './Components/ArrivalCart';
import { Banner } from './Components/Banner';
import { FullScreenCart } from './Components/FullScreenCart';

const windowWidth = Dimensions.get('window').width;
const widthFlex1 = windowWidth / 10

const Home = ({ navigation }) => {
  const [mode, setMode] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.headerContainer}>
          <Entypo name={`menu`} size={RFPercentage(4)} />

          <Title title={`Apparel`} weight={'500'} color={Colors.black} type={`Poppin-18`} />
          <View>
            <View style={[styles.circle(10), styles.bellStyle]}>
            </View>
            <Fontisto name={`bell`} size={RFPercentage(3.5)} />
          </View>
        </View>
        {/* HEADER */}

        <View style={styles.inputContainer}>
          <Feather
            name={`search`}
            size={RFPercentage(3)}
            style={{ marginHorizontal: RFPercentage(2) }} />
          <TextInput
            placeholderTextColor={'#8C9199'}
            placeholder='Search for tshirts, jeans, shorts, jackets'
            style={styles.searchInput}
          />
        </View>
        {mode == `FullScreen` ?
          <FlatList
            data={[0, 0, 0, 0, 0, 0, 0]}
            renderItem={({ item }) => <FullScreenCart item={item} navigation={navigation} />}
            keyExtractor={(item, index) => index.toString()}
          />
          :
          <>
            <FlatList
              horizontal
              contentContainerStyle={{ height: 200, }}
              showsHorizontalScrollIndicator={false}
              snapToInterval={widthFlex1 * 8 + 20} // Width of each item + margin
              decelerationRate={'normal'} // Adjust as needed
              data={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
              renderItem={() => <Banner />}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.row}>
              <Title
                title={`Recommended`}
                weight={'700'}
                color={Colors.black}
                type={'Poppin-18'} />
              <TouchableOpacity onPress={() => { setMode('FullScreen') }}>

                <Title
                  title={`See all`}
                  weight={'600'}
                  color={Colors.fontColor}
                  type={'Poppin-11'} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={[0, 0, 0, 0, 0, 0, 0]}
              numColumns={2}
              contentContainerStyle={{ marginBottom: RFPercentage(10) }}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              renderItem={({ item }) => <ArrivalCart item={item} navigation={navigation} />}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
        }

      </ScrollView>
    </SafeAreaView >
  );
};
export default Home;
