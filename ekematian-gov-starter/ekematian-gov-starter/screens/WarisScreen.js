
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image } from 'react-native';
export default function WarisScreen(){
  const [search, setSearch] = useState('');
  const data = Array.from({length:12}, (_,i)=>({ id:String(i+1), name:'Waris #' + (i+1)}));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senarai Waris</Text>
      <TextInput placeholder="Cari..." value={search} onChangeText={setSearch} style={styles.input}/>
      <FlatList
        data={data.filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))}
        keyExtractor={item=>item.id}
        renderItem={({item})=> (
          <View style={styles.card}>
            <Image source={require('../assets/logo.png')} style={{width:40,height:40,marginRight:12}}/>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles=StyleSheet.create({
  container:{flex:1,padding:16,backgroundColor:'#f6f9ff'},
  title:{fontSize:22,fontWeight:'700',color:'#1976d2',marginBottom:8},
  input:{borderWidth:1,borderColor:'#bbdefb',padding:10,borderRadius:10,marginBottom:12,backgroundColor:'#fff'},
  card:{flexDirection:'row',alignItems:'center',backgroundColor:'#fff',padding:12,borderRadius:12,marginBottom:10,elevation:2}
});
