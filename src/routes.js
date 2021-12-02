import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Error from './views/Error'
import Categories from './views/Categories'

import Header from './components/Header'
import Search from './components/Search'
import Footer from './components/Footer'

const routesComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default routesComponent;
