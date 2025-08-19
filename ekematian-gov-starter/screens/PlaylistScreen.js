
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
export default function PlaylistScreen({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Playlist Audio</Text>
      <Text>Dummy – tekan Tambah untuk simulasi.</Text>
      <Button title="Tambah Lagu" onPress={()=>navigation.navigate('TambahLagu')} />
      <Button title="Edit Playlist" onPress={()=>navigation.navigate('EditPlaylist')} />
    </View>
  );
}
const styles = StyleSheet.create({ container:{flex:1,alignItems:'center',justifyContent:'center', padding:16}, title:{fontSize:22, fontWeight:'700', color:'#1976d2', marginBottom:8}});
