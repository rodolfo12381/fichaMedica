import './Consultas.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from "../../slices/authSlice";
import { consultRegister } from "../../slices/consultSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { BsPlusCircleFill } from 'react-icons/bs'


const ConsultaModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [checked, setChecked] = useState(false);

    const [name, setName] = useState('');
    const [surName, setSurname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');

    const [data, setData] = useState("")
    const [horaInicio, setHoraInicio] = useState("")
    const [horaFim, setHoraFim] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault()

        const user = {
            name,
            surName,
            birthdate,
            email,
        }

        const consulta = {
            data,
            horaInicio,
            horaFim
        }
        dispatch(consultRegister(consulta))
        setShow(true)
    }

    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Agendar Nova Consulta <BsPlusCircleFill />
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title> <span className='title'>Agendar Nova Consulta</span> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='consulta-modal'>
                        <div>
                            <h2 className='mb-4'>Paciente já possui Cadastro?</h2>
                            <ButtonGroup className="mb-2">
                                <ToggleButton
                                    id="toggle-check"
                                    type="checkbox"
                                    className='btn'
                                    variant="secondary"
                                    checked={checked}
                                    value="1"
                                    onChange={(e) => setChecked(e.currentTarget.checked)}
                                >
                                    {checked ? 'Sim' : 'Não'}
                                </ToggleButton>
                            </ButtonGroup>
                            {checked ? (
                                <div>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <label className='form-label w-50'>Nome:</label>
                                        <input
                                            className='form-control w-50'
                                            type="text"
                                            placeholder="Nome"
                                            name="name"
                                            onChange={(e) => setName(e.target.value)}
                                            value={name}
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <label className='form-label w-50'>Sobrenome:</label>
                                        <input
                                            className='form-control w-50'
                                            type="text"
                                            placeholder="Sobrenome"
                                            name="surname"
                                            onChange={(e) => setSurname(e.target.value)}
                                            value={surName}
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <label className='form-label w-50'>Email:</label>
                                        <input
                                            className='form-control w-50'
                                            type="email"
                                            placeholder="E-mail"
                                            name="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center mb-3 '>
                                        <label className='form-label w-50'>Data de Nascimento:</label>
                                        <input
                                            className='form-control w-50'
                                            type="date"
                                            placeholder="Data de Nascimento"
                                            name="birthdate"
                                            onChange={(e) => setBirthdate(e.target.value)}
                                            value={birthdate}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <select className="form-select w-25 mt-3 mb-5" aria-label="Default select example">
                                        <option value="">SELECIONE</option>
                                        <option value="SIM">Jão</option>
                                        <option value="NAO">Rodolfo</option>
                                    </select>
                                </div>
                            )}
                        </div>
                        <div className='row'>
                            <input className='form-control w-25 ms-3 me-5' type="date" onChange={(e) => setData(e.target.value)} value={data}/>
                            <input className='form-control w-25' name='horario_inicio' type="time" onChange={(e) => setHoraInicio(e.target.value)} value={horaInicio} />
                            <span className="span-time">às</span>
                            <input className='form-control w-25 ms-4' name='horario_fim' type="time"onChange={(e) => setHoraFim(e.target.value)} value={horaFim}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="secondary" onClick={handleSubmit}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConsultaModal