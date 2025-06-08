import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routesHandler/routes';
import Header from './components/home/header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  )
}
