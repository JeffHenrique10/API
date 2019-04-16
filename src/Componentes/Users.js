import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Users= props=>(
    <View style={styles.container}>
      <Image style={styles.imagem} source={{uri:props.image}}/>
       
        <View style={styles.view2}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.email}>{props.email}</Text>
        </View>

        <Icon style={styles.icone} name="chevron-right"/>
    </View>

)

export default Users;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    flexDirection:'row',
    margin: 10,
    padding:10,
  },

  imagem:{
    width: 50,
    height: 50,
  },

  view2:{
    marginLeft:10,
  },

  name:{
    fontSize: 18,
    color:'#00000f',
  },

  email:{
    fontSize:12,
    color: '#A9A9A9',
  },

  icone:{
    fontSize: 16,
  }
});