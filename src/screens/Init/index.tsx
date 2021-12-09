import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


import { Container, H1, P } from "./style";
import Illustration from '../../assets/illustration.png'
import theme from "../../global/styles/theme";
import Discord from '../../assets/discord.png'

export function Init(){
    return(
    <Container>
        <Image source={Illustration} style={{resizeMode:"contain", marginTop:15}}/>
        <H1 style={style.title}>Conecte-se e organize suas jogatinas</H1>
        <P style={style.textBody}>Crie grupos para jogar seus games favoritos com seus amigos</P>
        <TouchableOpacity style={style.button}>
            <View style={style.viewButton}>
                <Image source={Discord} style={{resizeMode:"stretch"}}/>
                <Text style={{marginLeft:40, textAlign:'center'}}>Entrar com Discord</Text>
            </View>
        </TouchableOpacity>
    </Container>
    )
}
const style = StyleSheet.create({
    title:{
        paddingHorizontal:60,
        textAlign:'center',
        marginTop:-50
    },
    textBody:{
        paddingHorizontal:60,
        textAlign:'center',
        marginTop:20
    },
    button:{
        margin:40,
        padding:20,
        borderRadius:5,
        backgroundColor:theme.colors.primary,
    },
    viewButton:{
        flexDirection:'row',
        fontFamily:theme.fonts.medium_button
    }
})