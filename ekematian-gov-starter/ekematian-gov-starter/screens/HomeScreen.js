
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
const tiles=[{label:'Peserta',route:'Peserta'},{label:'Waris',route:'Waris'},{label:'Transaksi',route:'Transaksi'},{label:'Kematian',route:'Kematian'},{label:'Playlist',route:'Playlist'},{label:'Radio',route:'Radio'},{label:'Chat',route:'Chat'},{label:'Admin',route:'AdminPanel'}];
export default function HomeScreen({navigation}){
  return (<ImageBackground source={require('../assets/background.jpg')} style={styles.bg}>
    <View style={styles.overlay}/>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>eKematian</Text>
      <Text style={styles.subtitle}>Template kerajaan – dummy data</Text>
      <View style={styles.grid}>
        {tiles.map(t=>(<TouchableOpacity key={t.route} style={styles.tile} onPress={()=>navigation.navigate(t.route)}><Text style={styles.tileText}>{t.label}</Text></TouchableOpacity>))}
      </View>
    </ScrollView>
  </ImageBackground>);
}
const styles=StyleSheet.create({bg:{flex:1}, overlay:{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(0,0,40,0.25)'}, container:{padding:20,alignItems:'center'}, title:{fontSize:36,fontWeight:'800',color:'#fff',marginTop:40}, subtitle:{color:'#e3f2fd',marginBottom:24}, grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',gap:12}, tile:{backgroundColor:'#ffffffee',paddingVertical:18,paddingHorizontal:20,borderRadius:16,minWidth:140,alignItems:'center',margin:6,elevation:3}, tileText:{color:'#1976d2',fontWeight:'700',fontSize:16}});
