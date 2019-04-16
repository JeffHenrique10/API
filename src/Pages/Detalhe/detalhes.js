import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';

export default class detalhes extends Component{
    render() {
        const {navigation,user} = this.props;
        const nome= navigation.getParam('Nome', 'NO-NAME');
        const idade= navigation.getParam('Idade', 'NO-AGE');
        const sexo= navigation.getParam('Sexo', 'NO-SEX');
        const endereco= navigation.getParam('Endereco', 'NO-ADDRESS');
        const cidade= navigation.getParam('Cidade', 'NO-CITY');
        const uf= navigation.getParam('UF', 'NO-UF');
        const image= navigation.getParam('image', '');
        
        return(
            <View style={styles.container}>
                <Image style={styles.imagem} source={{uri:image}}/>

                <Text> Nome: {nome}</Text>
                <Text> Idade: {idade}</Text>
                <Text> Sexo:{sexo}</Text>
                <Text> Endereco: {endereco}</Text>
                <Text> Cidade: {cidade}</Text>
                <Text> UF: {uf}</Text>

                <Button title='Página anterior' onPress={()=> this.props.navigation.navigate('Inicio')}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    imagem:{
        width: 150,
        height: 150,
        borderRadius: 15,
    },
})