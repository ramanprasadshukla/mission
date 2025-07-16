import React, { useState } from 'react';
import './App.css';
import FilterBar from './FilterBar';
import Tabs from './Tabs';
import GalleryCard from './GalleryCard';

function App() {
  const [activeTab, setActiveTab] = useState('PRE-PRIMARY');
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const galleryData = [
        {
      category: 'PRE-PRIMARY',
      title: 'Blue Day Celebration',
      date: '1 Jul 2025',
      photos: 4,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9goSKIuNrkELxhjDe0O0EYw15xgp4sOj6xA&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9goSKIuNrkELxhjDe0O0EYw15xgp4sOj6xA&s',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9goSKIuNrkELxhjDe0O0EYw15xgp4sOj6xA&s',
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9goSKIuNrkELxhjDe0O0EYw15xgp4sOj6xA&s',
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9goSKIuNrkELxhjDe0O0EYw15xgp4sOj6xA&s'


      ]
    },
     {
      category: 'PRE-PRIMARY',
      title: 'Blue Day Celebration',
      date: '1 Jul 2025',
      photos: 4,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9goSKIuNrkELxhjDe0O0EYw15xgp4sOj6xA&s'

      ]
    },
     {
      category: 'PRE-PRIMARY',
      title: 'Blue Day Celebration',
      date: '1 Jul 2025',
      photos: 4,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
     {
      category: 'PRE-PRIMARY',
      title: 'Blue Day Celebration',
      date: '1 Jul 2025',
      photos: 4,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
     {
      category: 'PRE-PRIMARY',
      title: 'Blue Day Celebration',
      date: '1 Jul 2025',
      photos: 4,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
     {
      category: 'PRE-PRIMARY',
      title: 'Blue Day Celebration',
      date: '1 Jul 2025',
      photos: 4,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },

     {
      category: 'PRE-PRIMARY',
      title: 'Blue Day Celebration',
      date: '1 Jul 2025',
      photos: 4,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
     {
      category: 'PRE-PRIMARY',
      title: 'Blue Day Celebration',
      date: '1 Jul 2025',
      photos: 4,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
     {
      category: 'PRE-PRIMARY',
      title: 'Blue Day Celebration',
      date: '1 Jul 2025',
      photos: 4,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
     {
      category: 'PRE-PRIMARY',
      title: 'Blue Day Celebration',
      date: '1 Jul 2025',
      photos: 4,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },

    

    {
      category: 'GRADES I TO X',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },



     {
      category: 'GRADES I TO X',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
 {
      category: 'GRADES I TO X',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
 {
      category: 'GRADES I TO X',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
 {
      category: 'GRADES I TO X',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
 {
      category: 'GRADES I TO X',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },

     {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },


     {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
     {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
     {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
     {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
     {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
     {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
    {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
    {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
    {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
    {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    },
    {
      category: 'SR. SECONDARY',
      title: 'Science Fair',
      date: '12 Jul 2025',
      photos: 3,
      image: 'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
      albumImages: [
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg',
        'https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20120909/0022190dec4511b6542c0d.jpg'
      ]
    }

    // 👉 your existing galleryData array remains the same
  ];

  const filteredGallery = galleryData.filter(item => item.category === activeTab);

  return (
    <div className="app-container">
      <h1>Photo Gallery</h1>

      {!selectedAlbum ? (
        <>
          <FilterBar />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="gallery-grid">
            {filteredGallery.map((item, index) => (
              <GalleryCard key={index} {...item} onClick={() => setSelectedAlbum(item)} />
            ))}
          </div>
        </>
      ) : (
        <div className="album-view">
          <div className="album-info-bar">
            <span>Event Date: {selectedAlbum.date}</span>
            <div className="divider" />
            <span>Last Date: {selectedAlbum.date}</span>
            <div className="divider" />
            <span>Total Photos: {selectedAlbum.albumImages.length}</span>
            <div className="divider" />
            <span className="back-button" onClick={() => setSelectedAlbum(null)}>&laquo;</span>
          </div>

          <h2>{selectedAlbum.title}</h2>
          <div className="album-grid">
            {selectedAlbum.albumImages.map((img, i) => (
              <img key={i} src={img} alt={`album-${i}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
