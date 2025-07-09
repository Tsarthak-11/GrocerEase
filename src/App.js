import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import TopBar from './components/TopBar'
import HomePage from './pages/HomePage'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <TopBar />
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<h1>Products Page</h1>} />
            <Route path='/cart' element={<h1>Cart Page</h1>} />
            <Route path='/login' element={<h1>Login Page</h1>} />
          </Routes>
        </Container>
      </main>
    </Router>
  )
}

export default App
