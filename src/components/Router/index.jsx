//import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../utils/style/index.module.css'
import App from '../../App';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Error from '../../pages/Error';
import FlatsSheets from '../../pages/FlatsSheets';

//concaténer l'url logement pour récupérer l'id et ajouter toutes les propriétés utiles à la page logement

export default function MyRouter() {
    /*const savedId = localStorage.getItem("flatId")
    const [flatId, setFlatId] = useState(savedId ? savedId : null)

    useEffect(() => {
        localStorage.setItem("flatId", flatId)
        console.log(savedId)
    }, )*/

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                {/* <Route path={`/flat/${flatId}`} element={<FlatsSheets />} /> */}
                <Route path='/flat/:flatId' element={<FlatsSheets />} />
                <Route path='/*' element={<Error />} />
                <Route path='/app' element={<App />} />
            </Routes>
            <Footer />
        </Router>
    )
}