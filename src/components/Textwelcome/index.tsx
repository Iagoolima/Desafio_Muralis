import './style-TextWelcome.css'
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function TextWelcome() {

    const navigate = useNavigate()

    return (
        <div className="container-TextWelcome">

            <div className="box-TextWelcome">

                <h1 className="title-welcome">
                    Olá, Me chamo Iago !
                </h1>

                <h2 className="subTitle-welcome">
                    Esse é o meu desafio concluido para Muralis...
                </h2>

            </div>

            <div className="box-button-skip">

                <button className='button-skip-welcome' onClick={()=>navigate('/form')}>Seguir <FaArrowRight/> </button>

            </div>


        </div>
    );
}