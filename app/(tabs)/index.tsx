import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from '../style';


export default function HomeScreen() {
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={style.container}>
        <View style={style.topnav}>
          <View style={style.flexRow}>
            <Image
              source={require('../../assets/images/image.png')}
              style={style.profileImage}
            />
            <View>
              <Text style={style.title}>Yuven Carlson</Text>
              <Text style={style.title}>Welcome to snapfame</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image 
              source={require('../../assets/images/notifications.png')}
              style={style.notificaton}
            />
          </TouchableOpacity>
        </View>

        <View style={style.header}>
            <Text style={style.headingWhite}>Ballance: $100</Text>
            <TouchableOpacity style={style.button}>
              <Text>Top up</Text>
            </TouchableOpacity>
        </View>
        <View style={[style.topnav, style.paddingTop]}>
          <Text style={style.title1}>Top Services</Text>
          <TouchableOpacity><Text>See All</Text></TouchableOpacity>
        </View>
        <View style={style.servicesContainer}>
          <View style={style.service}></View>
          <View style={style.service}></View>
          <View style={style.service}></View>
          <View style={style.service}></View>
          <View style={style.service}></View>
          <View style={style.service}></View>
          <View style={style.service}></View>
          <View style={style.service}></View>
          <View style={style.service}></View>
          <View style={style.service}></View>
          <View style={style.service}></View>
          <View style={style.service}></View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

