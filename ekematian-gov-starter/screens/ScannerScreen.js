import { View, Text, StyleSheet, Button, Alert } from 'react-native';
// Nota: Untuk scanner sebenar, kita akan tambah expo-barcode-scanner kemudian.

export default function ScannerScreen(){
  return (
    <View style={styles.c}>
      <Text style={styles.h1}>QR / Scanner</Text>
      <Text>Template skrin scanner. (Boleh tambah kamera bila ready)</Text>
      <View style={{height:12}} />
      <Button title="Imbas (demo)" onPress={()=>Alert.alert('Scan', 'Hasil imbasan: DEMO-12345')} />
    </View>
  );
}
const styles = StyleSheet.create({
  c:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'},
  h1:{fontSize:22,fontWeight:'700',marginBottom:6}
});
