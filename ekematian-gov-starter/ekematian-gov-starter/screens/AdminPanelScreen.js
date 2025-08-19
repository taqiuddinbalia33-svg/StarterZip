
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function AdminPanelScreen(){
  return (<View style={styles.container}><Text style={styles.title}>Panel Admin (Dummy)</Text></View>);
}
const styles=StyleSheet.create({container:{flex:1,alignItems:'center',justifyContent:'center'},title:{fontSize:20,fontWeight:'700',color:'#1976d2'}});
