import React, { useState } from 'react'
import './homeStyles.css'
import { WebcamCapture } from '../Webcam/Webcam'
//import FileUploader from "./FileUploader";
//import axios from "axios";


const Home = () => {

    const [hola1, setName] = useState('')
    const [hola2, setEmail] = useState('');


    const submitForm = () => {
        alert("Form submitted");
        setName('');
        setEmail('');
    }


    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Set Fotografico Contenedores</h1>
                    <form className="form">
                        <WebcamCapture />
                        <input type="text" placeholder="hola1" onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="hola2" onChange={(e) => setName(e.target.value)} />
                        <button type="submit" id="login-button" onClick={(e) => submitForm(e)}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home
