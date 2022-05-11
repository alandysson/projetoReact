import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #000;
`

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
`

export const ContainerInputs = styled.View`
  flex-direction: column;
  width: 90%;
`

export const Input = styled.TextInput`
  background-color: #312d2d;
  color: #fff;
  justify-content: center;

  height: 47px;
  margin-bottom: 10px;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
`

export const BtnEntrar = styled.TouchableOpacity`
  background-color: #35c744;
  height: 47px;
  width: 120px;
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

export const Link = styled.Text`
  color: #6e6868;
  font-size: 16px;
  margin-top: 2px;
`