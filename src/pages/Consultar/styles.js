import styled from "styled-components";
import { Picker } from '@react-native-community/picker';

export const Container = styled.View`
    flex: 1;
    background-color: #000;
    align-items: center;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 22px;
    margin-top: 75px;
    margin-bottom: 22px;
`

export const ContainerButton = styled.View`
    width: 120px;
    height: 40px;
    background-color: #35C744;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    border-radius: 5px;
`

export const TextBtn = styled.Text`
    color: #fff;
    font-weight: 700;
    font-size: 16px;
`

export const Descricao = styled.Text`
    color: #fff;
    font-size: 19px;
    margin-top: 30px;
    margin-bottom: 22px;
`

export const PickerStyled = styled(Picker)`
    display: flex;
    color: #fff;
    background-color: #312D2D;
    width: 290px;
    border-radius: 10px;
`

// List Style

export const ContainerList = styled.View`
    flex: 1;
`

export const AreaList = styled.View`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 8px;
`

export const Txt = styled.Text`
    padding-bottom: 8px;
    font-size: 20px;
    align-items: center;
`

export const TextTitle = styled(Txt)`
    color: #454747;
`

export const TextValue = styled(Txt)`
    color: #c62c36;
`