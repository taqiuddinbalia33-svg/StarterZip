
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
export default function QRPesertaScreen(){
  const payload = { id:'PS-2024-001', name:'Ali Bin Ahmad' };
  return (<View style={styles.container}><Text style={styles.title}>QR Peserta (Demo)</Text><QRCode value={JSON.stringify(payload)} size={220}/><Text style={{marginTop:10}}>{payload.name}</Text></View>);
}
const styles = StyleSheet.create({container:{flex:1,alignItems:'center',justifyContent:'center'}, title:{fontSize:20,fontWeight:'700',color:'#1976d2', marginBottom:10}});
