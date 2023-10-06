import './style-modal.css';
import { FaTimes } from 'react-icons/fa';



export default function Modal({ closeModal }: { closeModal: () => void }) {

    return (
        <div className="container-modal">

            <div className="box-modal">

                <h1 className="title-modal">
                    Atenção
                </h1>

                <p className="text-modal">
                    Preencha todos os campos !
                </p>

                <div className="box-button-modal">
                    <button onClick={closeModal} className='button-modal'><FaTimes /></button>
                </div>


            </div>

        </div>
    )

}