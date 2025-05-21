import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/Home';
import About from './pages/About';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function RedirectToHashRoot() {
  const location = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      // если нет хэша, добавляем '#/' в URL
      window.location.replace(window.location.pathname + '#/');
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <Header></Header>
      <RedirectToHashRoot />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}
