import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import api from '../../axios';
import Users from '../../Componentes/Users';

export default class inicio extends Component{
    state={
      users:[],
    };
  
    componentDidMount = async()=>{
      const res= await api.get('');
      this.setState({users:res.data.results});
    };
  
    render() {
        const {users}= this.state;
        return (
        <View style={styles.container}>
            <View style={styles.view2}>
                <Text style={styles.texto}>LISTA DE USUÁRIOS</Text>
            </View>
              <ScrollView>
                {users.map( user =>(  
                  <TouchableOpacity key={user.login.uuid} onPress={()=>{
                    this.props.navigation.navigate('Detalhe', {
                      Nome: user.name.first,
                      Idade: user.dob.age,
                      Sexo: user.gender,
                      Endereco: user.location.street,
                      Cidade: user.location.city,
                      UF: user.location.state,
                      image: user.picture.large,
                    });
                  }}>

                  <Users key={user.login.uuid} name={`${user.name.first} ${user.name.last}`}
                        image={user.picture.medium} mail={user.email}/>
                  
                  </TouchableOpacity>
                ))}
              
              </ScrollView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 30,
    },
    view2: {
      alignItems: 'center',
      marginTop:30,
    },
    texto:{
      fontSize: 28,
      color:'#00000f',
    }
  });