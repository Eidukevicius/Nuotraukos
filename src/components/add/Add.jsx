import React, { useState } from 'react';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [newPhoto, setNewPhoto] = useState({
    title: '',
    url: '',
  });
  const [searchText, setSearchText] = useState('');

  const addPhoto = () => {
    setPhotos([...photos, newPhoto]);
    setNewPhoto({ title: '', url: '' });
  };

  const searchPhoto = (photo) => {
    return photo.title.toLowerCase().includes(searchText.toLowerCase());
  };

  return (
    <div className='container'>
      <div>
        <input
          className="form-control m-1"
          type="text"
          id="search"
          placeholder="Nuotraukos paieska"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        <h2>Pridėti nuotrauka</h2>
        <input
          className="form-control m-1"
          type="text"
          id="title"
          placeholder="Nuotraukos pavadinimas"
          value={newPhoto.title}
          onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
        />
        <input
          className="form-control m-1"
          type="text"
          id="url"
          placeholder="Nuotraukos URL"
          value={newPhoto.url}
          onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
        />
        <button className="btn btn-primary" onClick={addPhoto}>Save</button>
      </div>
      <div>
        {photos.filter(searchPhoto).map((photo, index) => (
          <div key={index}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
