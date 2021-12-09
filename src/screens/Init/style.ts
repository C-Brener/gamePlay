import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    background-color: ${({theme})=>theme.colors.background};
`;

export const P = styled.Text`
    font-size: 15px;
    font-family: ${({theme})=>theme.fonts.regular};
    color: ${({theme})=>theme.colors.body}
`
export const H1 = styled.Text`
    font-size: 40px;
    font-family:${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.heading}
`;
