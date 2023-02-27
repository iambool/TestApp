import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
// import BarRace from './pages/barRace';
import ECdata from './pages/ECdata';
// import Line from './pages/Line'; // 折线图案例

export default function App() {
  return (
    
    <View>
      <StatusBar backgroundColor='#04285c' /** for Android */ />
      <View style={styles.navigator}>
        <Text style={styles.navigatorTitle}>电商数据统计-Android</Text>
      </View>
      {/* <Line/> */}
      {/* <BarRace/> */}
      <ECdata/>
      </View>
  );
}

const styles = StyleSheet.create({
  navigator: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: (48 + (Platform.OS == 'ios' ? 32 : getStatusBarHeight())),
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    backgroundColor: '#04285c',
  },
  navigatorTitle: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 48, // 默认导航栏高度
    textAlign: 'center',
  },
});