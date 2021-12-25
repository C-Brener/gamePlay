import React from "react";
import { 
    Container,
    BackImage,
    Welcome,
    Warning,
    InitialScreen,
    ButtonBox,
    ButtonImage,
    ButtonText,
    InfosLogin
} from "./style";
import Illustration from '../../assets/illustration.png'
import Discord from '../../assets/discord.png'
import { useNavigation } from "@react-navigation/native";

export function Login(){
    const navigation = useNavigation()
    function handlestart(){
        navigation.navigate('game')
    }
    return(
    <Container>
        <BackImage source={Illustration}/>
        <InitialScreen>
            <InfosLogin>
                <Welcome>Conecte-se</Welcome>
                <Welcome> e organize suas jogatinas</Welcome>
                <Warning>Crie grupos para jogar seus games favoritos com seus amigos</Warning>
            </InfosLogin>
            <ButtonBox activeOpacity={0.5} onPress={handlestart}>
                <ButtonImage source={Discord}/>
                <ButtonText>Entrar com Discord</ButtonText>
            </ButtonBox>
        </InitialScreen>
    </Container>
    )
}
