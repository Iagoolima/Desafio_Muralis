import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListCity from '../functionListCity';
import Modal from '../modal';
import './style-form.css'

export default function Form() {

    const navigate = useNavigate()

    const [selectedName, setSelectedName] = useState<string>("");
    const [selectedCourse, setSelectedCourse] = useState<string>("");
    const [selectedState, setSelectedState] = useState<string>("");
    const [selectedCity, setSelectedCity] = useState<string>("")

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        if (!selectedName || !selectedCourse || !selectedState || !selectedCity) {
            setModalOpen(true)
        } 
        else {
            const ingressante = {
                name: selectedName,
                course: selectedCourse,
                state: selectedState,
                city: selectedCity
            }
            navigate('/sucess', {state:ingressante})
        }
    }

    return (

        <div className="container-form">

            <div className="box-title-form">

                <h1 className="title-form">
                    Cadastro de Ingressantes
                </h1>

            </div>

            <form onSubmit={handleSubmit} className='box-form'>

                <div className="box-input-form">

                    <label htmlFor="nome">Nome</label>
                    <input type="text" value={selectedName} onChange={(e) => setSelectedName(e.target.value)} />

                </div>

                <div className="box-input-form">

                    <label htmlFor="Curso">Curso</label>
                    <select id="curso" name="curso" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} >
                        <option value=""></option>
                        <option value="matematica">Matemática</option>
                        <option value="Letras">Letras</option>
                        <option value="Geografia">Geografia </option>
                    </select>

                </div>

                <div className="box-input-form">

                    <label htmlFor="Estado">Estado</label>
                    <select id="Estado" name="Estado" value={selectedState} onChange={(e) => setSelectedState(e.target.value)} >
                        <option value=""></option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="Minas Gerais">Minas Gerais </option>
                    </select>

                </div>

                <div className="box-input-form">

                    <label htmlFor="Cidade">Cidade</label>
                    <select id="Cidade" name="Cidade" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} >

                        <option value=""></option>
                        {ListCity(selectedState).map((city) => (
                            <option value={city}>{city}</option>
                        ))}

                    </select>

                </div>

                <div className="box-buttons-form">
                    <button className='button-form button-return' onClick={() => navigate('/')}>Voltar</button>
                    <button className='button-form button-skip' type='submit'>Gravar</button>
                </div>

            </form>

            {modalOpen && <Modal closeModal={() => setModalOpen(false)}  />}

        </div>

    )
}