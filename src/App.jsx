import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Cart from './pages/Cart/Cart'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Themes'
import Header from './components/Header'
import Footer from './components/Footer'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/singleproduct/:id' element={<SingleProduct />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
