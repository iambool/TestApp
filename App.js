import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import BarRace from './pages/barRace';
import Line from './pages/Line'; // 折线图案例

export default function App() {
  return (
    <View style={{marginTop: Platform.OS == 'ios' ? 32 : 0}}>
      <StatusBar style="auto" />
      <View style={styles.navigator}>
        <Text style={styles.navigatorTitle}>动态排序柱状图</Text>
      </View>
      {/* <Line/> */}
      <BarRace/>
    </View>
  );
}

const styles = StyleSheet.create({
  navigator: {
    height: 48,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  navigatorTitle: {
    fontSize: 18,
    lineHeight: 48,
    textAlign: 'center'
  },
});