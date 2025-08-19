
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
export default function TambahLaguScreen(){
  const [nama, setNama] = useState('');
  const [file, setFile] = useState(null);
  const pick = async()=>{
    const res = await DocumentPicker.getDocumentAsync({type:'audio/*'});
    if(res.type === 'success') setFile(res);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Lagu (Dummy)</Text>
      <TextInput value={nama} onChangeText={setNama} placeholder="Nama lagu" style={styles.input}/>
      <Button title="Pilih Fail Audio" onPress={pick} />
      {file && <Text style={{marginTop:8}}>Dipilih: {file.name}</Text>}
      <Button title="Simpan (Dummy)" onPress={()=>{}}/>
    </View>
  );
}
const styles = StyleSheet.create({container:{flex:1,padding:16}, title:{fontSize:20,fontWeight:'700',color:'#1976d2',marginBottom:10}, input:{borderWidth:1,borderColor:'#bbdefb',padding:10,borderRadius:10,marginBottom:12}});
