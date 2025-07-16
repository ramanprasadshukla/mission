import React from 'react';
import './GalleryCard.css';

function GalleryCard({ title, date, albumImages, image, onClick }) {
  return (
    <div className="gallery-card" onClick={onClick}>
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <div className="card-arrow">➜</div>
      </div>
      <div className="card-info">
        <div className="card-title">{title}</div>
        <div className="card-meta">
          <span>{date}</span>
          <span>No of Photos: {albumImages.length}</span>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
