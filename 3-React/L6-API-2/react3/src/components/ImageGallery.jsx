import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';
import fetchImages from '../services/image-api';
import { toast } from 'react-toastify';
import styles from '../styles/ImageGallery.module.css';

const ImageGallery = ({ searchQuery, onModalOpen }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(1);
  const [imagesPerPage] = useState(12);
  const [status, setStatus] = useState('idle');

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  // async function nameOfFunction() {
  //   try {
  //     const data = await fetch('website');
  //     setState(data);
  //   } catch (err) {
  //     console.error('Error occured');
  //     setError(true);
  //   }
  // }
  useEffect(() => {
    const fetchImagesData = async () => {
      setStatus('pending');

      try {
        const response = await fetchImages(searchQuery, page === 1);
        const { totalHits, hits } = response;

        if (totalHits > 0) {
          toast.success(
            `Hooray! We found ${totalHits} images of ${searchQuery}.`
          );
          setTotalHits(totalHits);
          setImages(prevImages => [...prevImages, ...hits]);
          setStatus('resolved');
        } else {
          setStatus('rejected');
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      } catch (error) {
        console.error('Error fetching images:', error);
        setStatus('rejected');
        toast.error(
          'Sorry, there was an error fetching the images. Please try again.'
        );
      }
    };

    if (searchQuery !== '') {
      setTotalHits(1);
      setPage(1);
      setImages([]);
      fetchImagesData();
    }
  }, [searchQuery, page]);

  if (status === 'pending') {
    return (
      <Container>
        <ul className={styles.gallery}>
          <ImageGalleryItem data={images} openModal={onModalOpen} />
        </ul>
        <Loader />
      </Container>
    );
  }

  if (images.length === totalHits || images.length > totalHits) {
    return (
      <Container>
        <ul className={styles.gallery}>
          <ImageGalleryItem data={images} openModal={onModalOpen} />
        </ul>
      </Container>
    );
  }

  if (status === 'resolved') {
    return (
      <Container>
        <ul className={styles.gallery}>
          <ImageGalleryItem data={images} openModal={onModalOpen} />
        </ul>
        <Button text={'Load more'} buttonClick={handleLoadMore} />
      </Container>
    );
  }

  return null;
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

export default ImageGallery;
