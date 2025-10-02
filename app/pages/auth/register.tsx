import { StyleSheet } from 'react-native';

import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from '../../style';

export default function Register() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View>
          <Text>Register page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
