import { useLocation, useNavigate } from 'react-router-dom';
import './style-sucess.css'


export default function Sucess(){

    const location = useLocation();
    const ingressante = location.state;

    const navigate = useNavigate()

    return(
        <div className="container-sucess">

            <div className="box-sucess">

                <div className="box-tilte-sucess">
                    <h2 className='tilte-sucess'>
                    Cadastro Realizado !
                    </h2>
                </div>

                <div className="box-data-ingressante">

                    <h3 className="title-data">
                    Nome
                    </h3>
                    <p className="text-data">
                    {ingressante.name}
                    </p>

                    <h3 className="title-data">
                    Curso
                    </h3>
                    <p className="text-data">
                    {ingressante.course}
                    </p>

                    <h3 className="title-data">
                    Estado
                    </h3>
                    <p className="text-data">
                    {ingressante.state}
                    </p>

                    <h3 className="title-data">
                    Cidade
                    </h3>
                    <p className="text-data">
                    {ingressante.city}
                    </p>

                </div>

            </div>

            <p className="info-text">
                    Visualizar projeto no GitHub
            </p>

            <div className="box-buttons-sucess">
                
                <a href="https://github.com/Iagoolima/Desafio_Muralis.git" target="_blank" className='button-info-sucess'>GitHub</a>

                <button onClick={()=> navigate('/')} className='button-info-sucess'>Inicio</button>

            </div>

        </div>
    )
}