import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from '../style';


export default function TabTwoScreen() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={[style.topnav, style.paddingTop]}>
          <Text style={style.title1}>Top Services</Text>
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
            <View style={style.service}></View>
            <View style={style.service}></View>
            <View style={style.service}></View>
            <View style={style.service}></View>
            <View style={style.service}></View>
            <View style={style.service}></View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
