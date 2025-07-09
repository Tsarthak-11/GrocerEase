import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';

// Import 8 different images (update the paths as needed)
import img1 from '../../images/britaniamarie.jpg';
import img2 from '../../images/parleg.jpg';
import img3 from '../../images/oreo.jpg';
import img4 from '../../images/sunfeastdark.jpg';
import img5 from '../../images/bonnbread.jpg';
import img6 from '../../images/harvest.jpg';
import img7 from '../../images/britianna.jpg';
import img8 from '../../images/goodday.jpg';

const bakeryBiscuitsProducts = [
  { id: 1, name: 'Britannia Marie Gold', price: 30, oldPrice: 35, category: 'Bakery & Biscuits', image: img1 },
  { id: 2, name: 'Parle-G', price: 20, oldPrice: 25, category: 'Bakery & Biscuits', image: img2 },
  { id: 3, name: 'Oreo Cream Biscuits', price: 40, oldPrice: 50, category: 'Bakery & Biscuits', image: img3 },
  { id: 4, name: 'Sunfeast Dark Fantasy', price: 60, oldPrice: 70, category: 'Bakery & Biscuits', image: img4 },
  { id: 5, name: 'Bonn Bread', price: 25, oldPrice: 30, category: 'Bakery & Biscuits', image: img5 },
  { id: 6, name: 'Harvest Gold Brown Bread', price: 35, oldPrice: 40, category: 'Bakery & Biscuits', image: img6 },
  { id: 7, name: 'Britannia Cake', price: 50, oldPrice: 60, category: 'Bakery & Biscuits', image: img7 },
  { id: 8, name: 'Good Day Cashew Cookies', price: 45, oldPrice: 55, category: 'Bakery & Biscuits', image: img8 },
];

const BakeryBiscuitsPage = () => (
  <>
    <div className="text-center mb-4">
      <h1>Bakery & Biscuits</h1>
      <p>Fresh bakery and delicious biscuits for everyone!</p>
    </div>
    <Row>
      {bakeryBiscuitsProducts.map(product => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default BakeryBiscuitsPage; 