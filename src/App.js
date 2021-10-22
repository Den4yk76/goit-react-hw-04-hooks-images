import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import PixabayFetch from './components/utils/PixabayFetch';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';

import './styles.css';

const newPixabayFetch = new PixabayFetch();

export default function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [responseData, setResponseData] = useState([]);
  const [status, setStatus] = useState('init');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [largeImg, setLargeImg] = useState('');

  useEffect(() => {
    if (search === '') {
      return;
    }

    window.scrollTo({
      top: document.documentElement,
      behavior: 'smooth',
    });
    newPixabayFetch.resetPage();
    setStatus('pending');
    setPage(1);

    newPixabayFetch.searchQuery = search;
    newPixabayFetch
      .searchPhotos()
      .then(res => {
        if (res.data.hits.length !== 0) {
          setResponseData([...res.data.hits]);
        } else alert('Nothing to show! Change your search query');
      })
      .then(setPage(p => p + 1))
      .finally(() => {
        setStatus('success');
      });
  }, [search]);

  const onSearchFormSubmit = search => {
    setSearch(search);
  };

  const onClick = value => {
    setStatus('pending');
    setPage(page + 1);

    newPixabayFetch.searchPage = page;
    newPixabayFetch
      .searchPhotos()
      .then(res => {
        setResponseData(prevState => [...prevState, ...res.data.hits]);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setStatus('success');
        window.scrollTo({
          top: document.documentElement.scrollHeight - 1200,
          behavior: 'smooth',
        });
      });
  };

  const onModalOpen = e => {
    const found = responseData.find(el => el.id.toString() === e.target.id);

    setModalIsOpen(!modalIsOpen);
    setLargeImg(found.largeImageURL);
  };

  const onModalClose = e => {
    if (
      e.target.className === 'Overlay' &&
      e.currentTarget.className === 'Overlay'
    ) {
      setModalIsOpen(!modalIsOpen);
    }
  };

  const onModalCloseByEsc = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Searchbar onSearchFormSubmit={onSearchFormSubmit} />
      <ImageGallery images={responseData} onModalOpen={onModalOpen} />
      {status === 'pending' && <Loader />}
      {responseData.length > 0 && <Button onClick={onClick} />}
      {modalIsOpen && (
        <Modal
          onModalOpen={onModalOpen}
          onModalClose={onModalClose}
          onModalCloseByEsc={onModalCloseByEsc}
          largeImg={largeImg}
        />
      )}
    </>
  );
}
