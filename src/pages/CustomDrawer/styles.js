import styled from "styled-components";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`

export const DrawerText = styled.Text`
  font-size: ${props => props.mainTitle ? '18px' : '19px'};
  font-weight: ${props => props.textWeigth ? 700 : 400};
  color: #fff;
  margin-bottom: ${props => props.marginText ? '20px' : '5px' };
`

export const DrawerImage = styled.Image`
  width: 85px;
  height: 85px;
  margin-bottom: 15px;
`