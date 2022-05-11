import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`

export const Data = styled.Text`
  color: #626363;
  text-align: right;
  margin-right: 32px;
`

export const Card = styled.View`
  flex: 1;
  padding: 15px;
  width: 85%;
  margin-left: 32px;
  margin-bottom: 24px;
  height: 95px;
  border-radius: 20px;

  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const Tipo = styled.Text`
  color: #000;
  font-size: 23px;
`

export const Preco = styled.Text`
  color: #c62c36;
  font-size: 23px;
  font-weight: bold;
`