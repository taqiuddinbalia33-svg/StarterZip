import { View, Text, StyleSheet, Switch, useColorScheme } from 'react-native';
import { useState } from 'react';
export default function SettingsScreen(){
  const scheme = useColorScheme();
  const [notif, setNotif] = useState(true);
  return (
    <View style={styles.c}>
      <Text style={styles.h1}>Tetapan</Text>
      <View style={styles.row}>
        <Text>Notifikasi</Text>
        <Switch value={notif} onValueChange={setNotif} />
      </View>
      <Text style={{marginTop:10,color:'#667'}}>Tema: {scheme}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  c:{flex:1,padding:16,backgroundColor:'#fff'},
  h1:{fontSize:20,fontWeight:'700',marginBottom:12},
  row:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:12,borderBottomWidth:1,borderColor:'#eee'}
});
