
import imagem from '../../Images/isnta.png';
import imagem2 from '../../Images/logocel.png';
import imgFace  from '../../Images/face2.jpg';
import imgApi from "../../Images/imgapi.png";
import imgApAndroid from '../../Images/imgApAndroid.png';
import img1 from '../../Images/img1.png';
import img2 from '../../Images/img2.png';
import img3 from '../../Images/img3.png';
import {useForm} from 'react-hook-form';
import "../../Style/Login.css";
import { useNavigate } from 'react-router-dom';


const TelaLogin = () =>  {
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} =  useForm();

    const logar = (data)=> {
        navigate("/home");
        console.log(data);

    }

    document.body.style.backgroundColor ="rgb(241, 238, 238)";
    return (
        <>
            <div className='main'>
                <div className="img">/
                    <img  src={imagem2}  alt="somos" />
                    <div className='transition'>
                        <img src={img1} alt="" />
                        <img src= {img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className="login">
                    <div className="dados">
                        <form  className='form' onSubmit={handleSubmit(logar)}>
                            <img className="logo" width={175} height={51} src={imagem} alt="eai"/>

                            <input className='email'
                            name='email' {...register('email')}  
                            placeholder="Telefone,nome de usuário ou email" type="text" />

                            <input className='senha' 
                            name="senha" {...register('senha')} 
                            placeholder=" senha" type="password" />

                            <button className='entrar' type='submit'> Entrar </button>
                        </form>
                        <p className='alt' > ________________  OU  ________________</p>
                        <div  className='redirect'>
                            <img src={imgFace} width={19} height={19} alt="imagem face" />
                            <p className='pars' >Entrar com Facebook</p>                        
                        </div>
                        <p className='novaSenha'>esqueceu a senha?</p>
                    </div>
                    <div className='cadastrar'>
                        <p>Não tem uma conta? </p>
                        <a className='cad' href='http://www.w3schools.com'>cadastre-se</a>
                    </div>
                    <div className='footer' >
                        <p>obtenha o aplicativo.</p>
                        <div className='botoes'>
                            <div>
                                <a href='https://apps.apple.com/br/app/instagram/id389801252' target='_blank' rel="noreferrer" >
                                    <img src={imgApi}  alt='' />
                                </a>
                            </div>
                            <div>
                                <a href='https://play.google.com/store/apps/details?id=com.instagram.android' target='_blank' rel='noreferrer' >
                                    <img src={imgApAndroid} alt='' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
        </>
    )
}

export default TelaLogin;