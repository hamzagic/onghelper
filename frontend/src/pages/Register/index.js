import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import "./styles.css";
import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        api.post('/ongs', data)
        .then(res => {
            console.log(res.data)
            history.push('/');
        })
        .catch();
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Retornar ao logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input type="text"
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                    <input type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input type="text" 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)} 
                    />
                    <div className="input-group">
                        <input type="text" 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)} 
                        />
                        <input type="text" 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            maxLength="2"
                            value={uf}
                            onChange={e => setUf(e.target.value)} 
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}