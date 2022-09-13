
import TelaLogin from './components/TelaLogin/Login';
import  Home from './components/home/Home';
//import Testeform from './components/testForm';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const App = () => {

    return (
    
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Login' element={<TelaLogin/>} />
            </Routes>
        </Router>
    )

};

export default App;