import '../../Style/Home.css';

import Header from './header';
import Section from './Section/Section';


const Home = ()=> {
      
    document.body.style.backgroundColor ="rgb(245, 248, 238)";

    return (

        <div className='cont'>
            <Header/>
            <hr/>
           <Section/>
            
        </div>

    )
} 

export default Home;