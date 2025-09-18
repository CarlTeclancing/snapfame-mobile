import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from '../style';


export default function TabTwoScreen() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View>
          <Text>Services page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
