import React from 'react';
import { Card, Container, Data, Preco, Tipo } from './styles.js';

export default function Lista({data}) {
 return (
   <Container>
    <Data>{data.data}</Data>
    <Card>
      <Tipo>{data.tipo}</Tipo>
      <Preco>- R${data.valor.toFixed(2)}</Preco>
    </Card>
   </Container>
  );
}