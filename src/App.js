import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import api from './axios';

export default class src extends Component{
  state={
    users:[],
  };

  componentDidMount = async()=>{
    const res= await api.get('/');
    this.setState({users:res.data});
  };

  render() {
    return (
      <View style={styles.container}>
          {this.state.users.map( user =>(  
            <Text key={user.id} style={styles.pessoas}>
              {`Nome: ${user.nome}\n`}
              {`Idade: ${user.idade}\n`}
              {`Sexo: ${user.sexo}\n`} 
              {`Endereco: ${user.endereco}\n`}
              {`Cidade: ${user.cidade}\n`}
              {`UF: ${user.UF}\n`}
            </Text>
          ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  pessoas:{
    fontSize: 18,
    color:'#00000f',
    margin:10,
  }
});
