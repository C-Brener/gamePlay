import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex:1;
    width: 100%;
    padding-top:10px;
    background-color: ${({theme})=>theme.colors.background};
`;
export const InitialScreen = styled.View`
    flex: 1;
    align-items: center;
    padding: ${RFValue(10)}px ${RFValue(29)}px ;
`
export const BackImage = styled.Image`
    height: ${RFValue(407)}px;
    width: ${RFValue(375)}px;   
`
export const Welcome=styled.Text`
    margin-top: -30px;
    text-align: center;
    font-size: ${RFValue(35)}px;
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.heading};
`
export const Warning=styled.Text`
    margin-top: 15px;
    font-size: ${RFValue(15)}px;
    text-align: center;
    font-family: ${({theme})=>theme.fonts.medium_button};
    color: ${({theme})=>theme.colors.heading};
`

export const ButtonBox=styled.TouchableOpacity`
width: ${RFValue(274)}px;
height:${RFValue(56)}px;
align-items: center;
justify-content: center;
border-radius: 10px;
flex-direction: row;
margin-top: 30px;
background-color: ${({theme})=>theme.colors.primary};
`
export const ButtonImage=styled.Image`
`
export const ButtonText=styled.Text`
`