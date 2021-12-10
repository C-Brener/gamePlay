import React from "react";
import { 
    Container,
    BackImage,
    InfoGame,
    Welcome,
    Warning, 
} from "./style";
import Illustration from '../../assets/illustration.png'
import Discord from '../../assets/discord.png'

export function Init(){
    return(
    <Container>
        <BackImage source={Illustration}/>
        {/* <InfoGame>
            <Welcome>Conecte-se e organize suas jogatinas</Welcome>
            <Warning>Crie grupos para jogar seus games favoritos com seus amigos</Warning>
        </InfoGame> */}
    </Container>
    )
}
