import styled from "styled-components";

export const Container = styled.View`
    background-color: #000;
    flex: 1;
`

export const Banner = styled.View`
    justify-content: center;
    align-items: center;
    height: 23%;
    background-color: #35C744;
    border-bottom-left-radius: 50;
    border-bottom-right-radius: 50;
`

export const TextDate = styled.Text`
    font-size: 27px;
    color: #C0B4B4;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
`

export const TextBanner = styled.Text`
    color: #fff;
    font-size: ${props => props.fontWidth ? '40px' : '30px'};
    font-style: ${props => props.styleFont ? 'italic' : 'normal'};
    font-weight: ${props => props.textWeigth ? 700 : 500}
`