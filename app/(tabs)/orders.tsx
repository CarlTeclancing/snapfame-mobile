import { StyleSheet } from 'react-native';

import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabThreeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Orders page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
