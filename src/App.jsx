import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import TopBar from './components/TopBar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import CartPage from './pages/CartPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import WishlistPage from './pages/WishlistPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AccountPage from './pages/AccountPage.jsx'
import Profile from './components/Profile.jsx'
import Orders from './components/Orders.jsx'
import Settings from './components/Settings.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import AataRiceDalPage from './pages/categories/AataRiceDalPage.jsx'
import BabyCarePage from './pages/categories/BabyCarePage.jsx'
import BakeryBiscuitsPage from './pages/categories/BakeryBiscuitsPage.jsx'
import ChickenMeatFishPage from './pages/categories/ChickenMeatFishPage.jsx'
import CleaningEssentialsPage from './pages/categories/CleaningEssentialsPage.jsx'
import DairyBreadEggsPage from './pages/categories/DairyBreadEggsPage.jsx'
import BreakfastInstantFoodPage from './pages/categories/BreakfastInstantFoodPage.jsx'
import PetCarePage from './pages/categories/PetCarePage.jsx'
import SnacksMunchiesPage from './pages/categories/SnacksMunchiesPage.jsx'
import TeaCoffeeDrinksPage from './pages/categories/TeaCoffeeDrinksPage.jsx'
import FruitsVegetablesPage from './pages/categories/FruitsVegetablesPage.jsx'
import IceCreamDessertsPage from './pages/categories/IceCreamDessertsPage.jsx'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <TopBar />
      <Header />
      <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<Container className='py-3'><ProductsPage /></Container>} />
          <Route path='/category/atta-rice-dal' element={<Container className='py-3'><AataRiceDalPage /></Container>} />
          <Route path='/category/baby-care' element={<Container className='py-3'><BabyCarePage /></Container>} />
          <Route path='/category/bakery-biscuits' element={<Container className='py-3'><BakeryBiscuitsPage /></Container>} />
          <Route path='/category/chicken-meat-fish' element={<Container className='py-3'><ChickenMeatFishPage /></Container>} />
          <Route path='/category/cleaning-essentials' element={<Container className='py-3'><CleaningEssentialsPage /></Container>} />
          <Route path='/category/dairy-bread-eggs' element={<Container className='py-3'><DairyBreadEggsPage /></Container>} />
          <Route path='/category/breakfast-instant-food' element={<Container className='py-3'><BreakfastInstantFoodPage /></Container>} />
          <Route path='/category/pet-care' element={<Container className='py-3'><PetCarePage /></Container>} />
          <Route path='/category/snacks-munchies' element={<Container className='py-3'><SnacksMunchiesPage /></Container>} />
          <Route path='/category/tea-coffee-drinks' element={<Container className='py-3'><TeaCoffeeDrinksPage /></Container>} />
          <Route path='/category/fruits-vegetables' element={<Container className='py-3'><FruitsVegetablesPage /></Container>} />
          <Route path='/category/ice-cream-desserts' element={<Container className='py-3'><IceCreamDessertsPage /></Container>} />
          <Route path='/product/:id' element={<Container className='py-3'><ProductDetailsPage /></Container>} />
          <Route path='/cart' element={<Container className='py-3'><CartPage /></Container>} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path='/account' element={<AccountPage />}>
              <Route path='profile' element={<Profile />} />
              <Route path='orders' element={<Orders />} />
              <Route path='settings' element={<Settings />} />
            </Route>
          </Route>
          </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
