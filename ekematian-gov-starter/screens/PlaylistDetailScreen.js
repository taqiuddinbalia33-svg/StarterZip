import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function PlaylistDetailScreen({ route }) {
  const { id, title } = route.params ?? {};
  return (
    <View style={styles.c}>
      <Text style={styles.h1}>{title}</Text>
      <Text>ID: {id}</Text>
      <View style={{height:12}} />
      <Button title="Mainkan semua" onPress={()=>Alert.alert('Play', `Memainkan "${title}"`)} />
    </View>
  );
}
const styles = StyleSheet.create({
  c:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f9fafb',padding:16},
  h1:{fontSize:22,fontWeight:'700',marginBottom:8}
});
