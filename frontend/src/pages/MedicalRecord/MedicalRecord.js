import './MedicalRecord.css'
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from "../../slices/authSlice";
import { useNavigate } from 'react-router-dom';

const MedicalRecord = () => {

    const navigate = useNavigate()
    
    const steps = [
        {
            id: 'user_data',
            title: "Dados Pessoais",
            progress: "start"
        },
        {
            id: 'medical_data',
            title: "Dados de Saúde",
            progress: "middle"
        },
        {
            id: 'convenio_data',
            title: "Dados de Convênio",
            progress: "end"
        },
        {
            id: 'register_end',
            title: "Registro Finalizado!",
            progress: "submit"
        }
    ];

    const [currentStep, setCurrentStep] = useState(0);

    function handleNextStep() {
        setCurrentStep((prevState) => prevState + 1);
    }
    function handlePrevStep() {
        setCurrentStep((prevState) => prevState - 1);
    }

    const [name, setName] = useState('');
    const [surName, setSurname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');

    const [cardiaco, setCardiaco] = useState('');
    const [desmaioConvulsao, setDesmaioConvulsao] = useState('');
    const [diabetico, setDiabetico] = useState('');
    const [internado, setInternado] = useState('');
    const [intoleranteLactose, setIntoleranteLactose] = useState('');
    const [transfusao, setTransfusao] = useState('');
    const [cartaoSus, setCartaoSus] = useState('');
    const [numeroConvenio, setNumeroConvenio] = useState('');
    const [convenio, setConvenio] = useState('');

    const dispatch = useDispatch();


    const handleSubmit = (e) => {

        e.preventDefault()

        const user= {
            primeiroNome: name,
            sobreNome: surName,
            birthdate: birthdate,
            email: email,
        }

        dispatch(register(user));

        const medicalData = {
            cardiaco: cardiaco,
            desmaioConvulsao: desmaioConvulsao,
            diabetico: diabetico,
            internado: internado,
            intoleranteLactose: intoleranteLactose,
            transfusao:transfusao,
            cartaoSus: cartaoSus,
            numeroConvenio: numeroConvenio,
            convenio: convenio
        }
        
        // dispatch(registerMedical(medicalData));
        setCurrentStep((prevState) => prevState + 1);
        navigate("/profile")
    }

    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    return (
        <div className="ficha-medica">
            <h2>Ficha Médica do Paciente</h2>
            <div className="progress">
                <div className="progress-bar" id={steps[currentStep].progress} role="progressbar" aria-valuenow={steps[currentStep].progress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            {steps[currentStep].id === 'user_data' && (
                <div className="fields">
                    <h3>{steps[currentStep].title}</h3>
                    <div className='d-flex justify-content-center mb-3 mt-5'>
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
            )}
            {steps[currentStep].id === 'medical_data' && (
                <div className="fields">
                    <h3 className='mb-4'>{steps[currentStep].title}</h3>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <label className='form-label '>Cardíaco:</label>
                        </div>
                        <div className='col-6'>
                            <select className="form-select " aria-label="Default select example" onChange={(e)=> setCardiaco(e.target.value)} value={cardiaco}>
                                <option value="">SELECIONE</option>
                                <option value="SIM">SIM</option>
                                <option value="NAO">NÃO</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <label className='form-label'>Desmaio ou Convulsão:</label>
                        </div>
                        <div className='col-6'>
                            <select className="form-select" aria-label="Default select example" onChange={(e)=> setDesmaioConvulsao(e.target.value)} value={desmaioConvulsao}>
                                <option value="">SELECIONE</option>
                                <option value="DESMAIO">DESMAIO</option>
                                <option value="CONVULSAO">CONVULSÃO</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Diabético:</label>
                        </div>
                        <div className="col-6">
                            <select className="form-select" aria-label="Default select example" onChange={(e)=> setDiabetico(e.target.value)} value={diabetico}>
                                <option value="">SELECIONE</option>
                                <option value="SIM">SIM</option>
                                <option value="NAO">NÃO</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Internado:</label>
                        </div>
                        <div className="col-6">
                            <select className="form-select" aria-label="Default select example" onChange={(e)=> setInternado(e.target.value)} value={internado}>
                                <option value="">SELECIONE</option>
                                <option value="SIM">SIM</option>
                                <option value="NAO">NÃO</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Intorelante à Lactose:</label>
                        </div>
                        <div className="col-6">
                            <select className="form-select" aria-label="Default select example" onChange={(e)=> setIntoleranteLactose(e.target.value)} value={intoleranteLactose}>
                                <option value="">SELECIONE</option>
                                <option value="SIM">SIM</option>
                                <option value="NAO">NÃO</option>
                            </select>
                        </div>                    </div>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Transfusão:</label>
                        </div>
                        <div className="col-6">
                            <select className="form-select" aria-label="Default select example" onChange={(e)=> setTransfusao(e.target.value)} value={transfusao}>
                                <option value="">SELECIONE</option>
                                <option value="SIM">SIM</option>
                                <option value="NAO">NÃO</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
            {steps[currentStep].id === 'convenio_data' && (
                <div className="fields">
                    <h3 className='mb-4'>{steps[currentStep].title}</h3>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Cartão do SUS:</label>
                        </div>
                        <div className="col-6">
                            <input
                                className='form-control'
                                type="text" 
                                onChange={(e)=> setCartaoSus(e.target.value)} 
                                value={cartaoSus}/>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Número do Convênio:</label>
                        </div>
                        <div className="col-6">
                            <input
                                className='form-control'
                                type="text"
                                onChange={(e)=> setNumeroConvenio(e.target.value)} 
                                value={numeroConvenio} />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <label className='form-label'>Convênio:</label>
                        </div>
                        <div className="col-6">
                            <input
                                className='form-control'
                                type="text"
                                onChange={(e)=> setConvenio(e.target.value)} 
                                value={convenio} />
                        </div>
                    </div>
                </div>
            )}
            {steps[currentStep].id === 'register_end' && (
                <div className="fields">
                    <h3 className='mb-4'>{steps[currentStep].title}</h3>
                </div>
            )}
            <div className='row position-relative"'>
                {currentStep > 0 && (
                    <div className='col-6 position-absolute start-0'>
                        <button
                            className="btn prev"
                            type="button"
                            onClick={handlePrevStep}
                        >
                            Anterior
                        </button>
                    </div>
                )}
                {currentStep < steps.length - 1 && (
                    <div className='col-6 position-absolute end-0'>
                        <button
                            className="btn next"
                            type="button"
                            onClick={handleNextStep}
                        >
                            Próximo
                        </button>
                    </div>
                )}
                {currentStep === steps.length - 1 && (
                    <div className='col-6 position-absolute end-0'>
                        <button className="btn submit" type="submit" onClick={handleSubmit}>
                            Enviar
                        </button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default MedicalRecord