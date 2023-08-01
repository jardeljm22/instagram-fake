
//import { useEffect, useId,useState} from 'react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Api from '../../Api';
import "../../../Style/Article.css";
import Stories from "../Section/Stories";

//import api from '../../../services/api';
 

const Article = () => {

    const [amigos,setAmigos] = useState([]);

    useEffect(()=>{
        Api.get("/amigos").then((response)=>{
            setAmigos(response.data);
            console.log(response.data);
        })

    },[]);


   
    
    

    return(
        <div className='caixa'>
            <Stories/>    
            {
                amigos.map((amigo)=>(
                    <div key={amigo.id} className='dados2' >
                        <div className='topo'>
                            <div className='user' >
                                <Link to='/Login' >
                                    <img src={amigo.photo_perfil} alt='' />
                                </Link>
                                <Link to='/' style={{textDecoration :  'none'}} >
                                    <p>{amigo.name}</p>
                                </Link>
                            </div>
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" width={24} height={24} strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/></svg>
                        </div>
                        <hr/>
                        <div className='post' >
                            <img src={amigo.postagem} alt="" />
                        </div>
                        <div className='information'>
                            <div className='reacts' >
                                <div className='d1' >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" style={{border :'3px'}} ><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007m0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="24" viewBox="0 0 24 24"><path d="M16 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24z"/></svg>
                                </div>                                
                            </div>

                        </div>
                    </div>

                ))
            }       
            
        </div>
            
    )

}

export default Article;