import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.c}>
      <Text style={styles.h1}>Selamat datang 👋</Text>
      <Text>Ini halaman utama.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  c:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f7f9fc'},
  h1:{fontSize:24,fontWeight:'700',marginBottom:8}
});
