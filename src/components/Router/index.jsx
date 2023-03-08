import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../utils/style/index.module.css'
import App from '../../App';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Error from '../../pages/Error';
import FlatsSheets from '../../pages/FlatsSheets';
import flatsList from '../../datas/flatsList.json';
//import { useFetch } from "../../utils/hooks";

export default function MyRouter() {
    const [flatId, setFlatId] = useState('');
    /*const { data, isLoading, error } = useFetch(`https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`);
    const flatsList = data;*/

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home flatId={flatId} setFlatId={setFlatId} /*error={error}*/ />} />
                <Route path='/about' element={<About />} />
                {flatsList.map((flat) => (<Route key={flat.id} path={`/flat/${flat.id}`} element={<FlatsSheets /*error={error}*/ />} />))}
                {/* <Route path={`/flat/${flatId}`} element={<FlatsSheets flatId={flatId} setFlatId={setFlatId} />} /> */}
                {/* <Route path='/flat/:flatId' element={<FlatsSheets />} /> */}
                <Route path='/*' element={<Error />} />
                <Route path='/app' element={<App />} />
            </Routes>
            <Footer />
        </Router>
    )
}