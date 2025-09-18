import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from '../style';

export default function TabFourScreen() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View>
          <Text>Profile page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
