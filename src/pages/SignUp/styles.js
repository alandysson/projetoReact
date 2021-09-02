import styled from "styled-components";

export const Container = styled.View`
  background-color: #000;
  flex: 1;
`

export const ContainerInput = styled.View`
  flex-direction: column;
  width: 90%;
`

export const Input = styled.TextInput`
  background-color: #312d2d;
  color: #fff;
  justify-content: center;

  height: 47px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  border-radius: 5px;
`

export const BtnRegistrar = styled.TouchableOpacity`
  background-color: #35c744;
  height: 47px;
  width: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 12px;
`

export const BtnText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`
