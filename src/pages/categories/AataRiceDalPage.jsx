import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';

// Import 8 different images (update the paths as needed)
import img1 from '../../images/basmatirice.jpeg';
import img2 from '../../images/ashirvadatta.jpeg';
import img3 from '../../images/fortunesona.jpeg';
import img4 from '../../images/tatasampanatoor.jpeg';
import img5 from '../../images/indiagatebasmati.jpeg';
import img6 from '../../images/patanjaliwholewheat.jpeg';
import img7 from '../../images/organicmoongdal.webp';
import img8 from '../../images/shaktibhogatta.jpeg';

const aataRiceDalProducts = [
  { id: 1, name: 'Basmati Rice', price: 120, oldPrice: 140, category: 'Atta, Rice & Dal', image: img1 },
  { id: 2, name: 'Aashirwad Atta', price: 200, oldPrice: 220, category: 'Atta, Rice & Dal', image: img2 },
  { id: 3, name: 'Fortune Sona Masoori Rice', price: 90, oldPrice: 110, category: 'Atta, Rice & Dal', image: img3 },
  { id: 4, name: 'Tata Sampann Toor Dal', price: 150, oldPrice: 170, category: 'Atta, Rice & Dal', image: img4 },
  { id: 5, name: 'India Gate Basmati Rice', price: 180, oldPrice: 200, category: 'Atta, Rice & Dal', image: img5 },
  { id: 6, name: 'Patanjali Whole Wheat Atta', price: 160, oldPrice: 180, category: 'Atta, Rice & Dal', image: img6 },
  { id: 7, name: 'Organic Moong Dal', price: 130, oldPrice: 150, category: 'Atta, Rice & Dal', image: img7 },
  { id: 8, name: 'Shakti Bhog Atta', price: 140, oldPrice: 160, category: 'Atta, Rice & Dal', image: img8 },
];

const AataRiceDalPage = () => {
  return (
    <>
      <div className="text-center mb-4">
        <h1>Atta, Rice & Dal</h1>
        <p>Explore our best quality Atta, Rice, and Dal products!</p>
      </div>
      <Row>
        {aataRiceDalProducts.map(product => (
          <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AataRiceDalPage; 