import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const DATA = [
  { id:'1', title:'Playlist Doa Harian' },
  { id:'2', title:'Playlist Tahlil' },
  { id:'3', title:'Playlist Zikir Pagi' },
  { id:'4', title:'Playlist Zikir Petang' },
];
export default function PlaylistsScreen({ navigation }) {
  return (
    <View style={styles.c}>
      <Text style={styles.h1}>Senarai Playlist</Text>
      <FlatList
        data={DATA}
        keyExtractor={(i)=>i.id}
        renderItem={({item})=>(
          <TouchableOpacity
            style={styles.card}
            onPress={()=>navigation.navigate('PlaylistDetail', { id:item.id, title:item.title })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.sub}>Tap untuk lihat butiran</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={()=> <View style={{height:10}} />}
        contentContainerStyle={{padding:16}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  c:{flex:1,backgroundColor:'#fff'},
  h1:{fontSize:20,fontWeight:'700',padding:16},
  card:{padding:16,borderRadius:16,backgroundColor:'#f3f6ff',borderWidth:1,borderColor:'#e6ecff'},
  title:{fontSize:16,fontWeight:'600'},
  sub:{marginTop:4,color:'#667'}
});
