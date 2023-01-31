
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

const Formulario = ({titulo}) => {
   
    let [nombre, setNombre] = useState('');
    let [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");

    //Función antes de enviar el formulario
    const noVacios =(a,b)=>{
        return(
            (a!=='' && b!=='')? <p><button className='btn btn-primary m-2'>{titulo}</button></p>:<p> <button className='btn btn-danger m-2' disabled>Desactivado</button> <span className='help'>Ingresar datos para activar botón</span></p> 
            
            );
    };

    const validarDatos = (event) => {
        //Validación;
        event.preventDefault();
        if (nombre === 'ADL' &&  password === '252525') {
            setAlertType("success");
            setAlertMessage("Usted a ingresado al sitio correctamente.");
            setShow(true);
            setNombre('');
            setPassword('');
        }
        else{
            setAlertType("danger");
            setAlertMessage("Los datos son incorrectos.");
            setShow(true);
            setNombre('');
            setPassword('');
        }
    };
    return (
        <div>
            <Alert className='m-2' show={show} variant={alertType}>
            {alertMessage}
            </Alert>
            <form className="formulario" onSubmit={validarDatos}>
                <div className='mensaje'></div>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
                <div className="form-group">
                    
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                {noVacios(nombre, password)}
                
            </form>
            <hr />
        </div>
    );
};
export default Formulario;