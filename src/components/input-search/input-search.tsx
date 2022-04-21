import React, {Fragment, useState} from 'react';
import './input-search.scss'
import {BsSearch} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
const InputSearch  = () => {

    const [data, setData] = useState({
        search: ''
    })

    const navigate = useNavigate();

    const handleInputChange = (event: any) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        navigate('/items?search=' + data.search);
    }

    return (
        <Fragment>
            <form className="nav-search" onSubmit={handleSubmit}>
                <input type="text"
                       className="nav-search-input"
                       name="search"
                       placeholder="Buscar productos, marcas y más…"
                       onChange={handleInputChange}
                />
                <button type="submit" className="nav-search-btn">
                    <BsSearch/>
                </button>
            </form>
        </Fragment>
    );
}

export default InputSearch ;
