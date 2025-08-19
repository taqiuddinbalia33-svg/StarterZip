
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
export default function RadioScreen(){
  const url = 'https://stream.live.vc.bbcmedia.co.uk/bbc_world_service';
  const play = async()=>{
    const {sound} = await Audio.Sound.createAsync({uri:url});
    await sound.playAsync();
  };
  return (<View style={styles.container}><Text style={styles.title}>Radio On Air (Demo)</Text><Button title="Play Radio" onPress={play}/></View>);
}
const styles = StyleSheet.create({container:{flex:1,alignItems:'center',justifyContent:'center'}, title:{fontSize:20,fontWeight:'700',color:'#1976d2',marginBottom:10}});
