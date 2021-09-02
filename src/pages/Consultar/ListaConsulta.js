import React from 'react';
import { ContainerList, TextTitle, TextValue } from './styles.js';

export default function ListaConsulta({data}) {
  return (
    <ContainerList>
      <AreaList>
        <TextTitle>{data.tipo}</TextTitle>
        <TextValue>- R${data.valor.toFixed(2)}</TextValue>
      </AreaList>
    </ContainerList>
  );
}