import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import GalleryImages from '../constants/gallery';

export default function Gallery() {
  return (
    <Container className="gallery-section" id="gallery">
      <div className="row">
        {GalleryImages.map((item, index) => {
          return (
            <div className="col-lg-4 col-md-4 col-6">
              <div className="d-block mb-4 mt-4 h-100">
                <Image src={item.number} fluid thumbnail />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
