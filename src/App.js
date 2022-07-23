import React from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

import {Container, Row, Col} from 'reactstrap';

function App() {
  let productInfo = {title:"Product List"};
  let categoryInfo = {title:"Category List"}
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs ="3">
            <CategoryList info={productInfo}/>
          </Col>
          <Col xs ="9">
            <ProductList info={categoryInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
