import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ data, openModal }) => {
  return data.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li
      className={styles.item}
      key={id}
      onClick={() => openModal({ largeImageURL, tags })}
    >
      <img
        src={webformatURL}
        className={styles.image}
        alt={tags}
        loading="lazy"
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
