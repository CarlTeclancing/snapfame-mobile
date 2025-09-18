import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from '../style';


export default function HomeScreen() {
  return (
    <ScrollView>
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
            <Ionicons name="alert" size={24} color={'white'} />
          </TouchableOpacity>
        </View>

        <View style={style.header}>
            <Text style={style.headingWhite}>Ballance: $100</Text>
            <TouchableOpacity style={style.button}>
              Top up
            </TouchableOpacity>
        </View>
        <View style={style.column}>
          <Text style={style.title}>Top Services</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

