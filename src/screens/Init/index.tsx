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
} from "./style";
import Illustration from '../../assets/illustration.png'
import Discord from '../../assets/discord.png'

export function Init(){
    return(
    <Container>
        <BackImage source={Illustration}/>
        <InitialScreen>
            <Welcome>Conecte-se e organize suas jogatinas</Welcome>
            <Warning>Crie grupos para jogar seus games favoritos com seus amigos</Warning>
            <ButtonBox activeOpacity={0.5}>
                <ButtonImage source={Discord}/>
                <ButtonText>Entrar Com Discord</ButtonText>
            </ButtonBox>
        </InitialScreen>
    </Container>
    )
}
