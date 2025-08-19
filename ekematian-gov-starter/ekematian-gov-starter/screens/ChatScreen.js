
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
export default function ChatScreen(){
  const [msg, setMsg] = useState('');
  const [list, setList] = useState([{sender:'admin', msg:'Selamat datang!'}]);
  return (
    <View style={{flex:1, padding:12}}>
      <FlatList data={list} keyExtractor={(_,i)=>String(i)} renderItem={({item})=>(
        <View style={[styles.bubble, item.sender==='admin'?styles.right:styles.left]}>
          <Text style={{color:'#0d47a1'}}>{item.sender}</Text>
          <Text>{item.msg}</Text>
        </View>
      )}/>
      <TextInput value={msg} onChangeText={setMsg} placeholder="Tanya sesuatu..." style={styles.input}/>
      <Button title="Hantar" onPress={()=>{ setList([...list, {sender:'user', msg}]); setMsg(''); }}/>
    </View>
  );
}
const styles = StyleSheet.create({bubble:{backgroundColor:'#fff', padding:10, marginVertical:6, borderRadius:10, maxWidth:'80%'}, left:{alignSelf:'flex-start'}, right:{alignSelf:'flex-end'}, input:{borderWidth:1, borderColor:'#bbdefb', padding:10, borderRadius:10, marginVertical:8, backgroundColor:'#fff'}});
