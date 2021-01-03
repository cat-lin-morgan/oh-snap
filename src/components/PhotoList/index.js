import React, { useState } from 'react';
import Modal from '../Modal';
import { photoPlural } from '../../constants';

function PhotoList({category}) {

  const [currentPhoto, setCurrentPhoto]= useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState(photoPlural)

    const currentPhotos = photos.filter((photo) => photo.category === category);

    const showModal = (image, i) => {
      setIsModalOpen(true);
      setCurrentPhoto({...image, index: i});
    }

    const closeModal = (e) => {
      e.stopPropagation();
      if (e.target.id === 'backdrop' || e.target.id === 'close-button') {
        setIsModalOpen(false)
        setCurrentPhoto({})
      }
    }

    return(
        <>
            {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={closeModal} />}
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img 
                        src={require(`../../assets/small/${category}/${i}.jpg`).default}
                        alt={image.name}
                        className='img-thumbnail mx-1'
                        key={image.name}
                        onClick={() => showModal(image, i)}
                    />
                ))}
            </div>
        </>
    )
}

export default PhotoList;