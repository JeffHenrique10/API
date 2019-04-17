import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';

export default class Detalhe extends Component{
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

                <Text style={styles.texto}> Nome: {nome}</Text>
                <Text style={styles.texto}> Idade: {idade}</Text>
                <Text style={styles.texto}> Sexo:{sexo}</Text>
                <Text style={styles.texto}> Endereco: {endereco}</Text>
                <Text style={styles.texto}> Cidade: {cidade}</Text>
                <Text style={styles.texto}> UF: {uf}</Text>

                <Button style={styles.botao} title='Página anterior' 
                onPress={()=> this.props.navigation.navigate('Inicio')}/>
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

    texto:{
        color: '#00000f',
        fontSize: 16,
    },

    botao:{
        marginTop: 20,
        color: '#FF0000',
    },

})