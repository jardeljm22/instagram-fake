

import {useForm} from 'react-hook-form';
import '../Style/Login.css';


const Teste = () => {

    const {register,handleSubmit,formState:{erros}} = useForm();

    const enviar =(dados)=>{
        console.log(dados);
    }

    return (

        <div className='dados' >
            <form onSubmit={handleSubmit(enviar)} >

                <input name='email' {...register('email')}
                className='email' placeholder='email'/>
                <input name='senha'  {...register('senha')}
                className='senha'  placeholder='senha' />
                <button className='entrar'  type='submit'> logar</button>

            </form>
        </div>


    )
}

export default Teste;