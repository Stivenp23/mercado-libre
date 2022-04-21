import './list-products.scss';
import React, {ChangeEvent, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../../components/header/header";
import {Container, Row} from "react-bootstrap";
const axios = require('axios');

function ListProducts() {
    const search = useLocation().search;
    const valueSearch = new URLSearchParams(search).get('search');
    const [dataEnd, setData] = useState([]);
    console.log(valueSearch)
    useEffect(() => {
        axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + valueSearch, {})
            .then((res: any) => {
                setData(res?.data?.results)
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }, [valueSearch]);
    const navigate = useNavigate();
    function detailProduct(id: string) {
        navigate('/items/' + id);
    }
    return (
        <section className="list">
            <Header></Header>
            <Container>
                <div className="list__content">
                    {dataEnd?.length === 0 ?
                        <div className="p-4 text-center">
                            Cargando....
                        </div>
                        : dataEnd?.slice(0, 4).map((res: any, index: number) => {
                            return <a onClick={() => detailProduct(res?.id)} target="_self">
                                <Row key={index} className={index !== 3 ? 'border-bottom p-4' : 'p-4'}>
                                    <div className="col-12 col-sm-3">
                                        <img src={res?.thumbnail || ''}/>
                                    </div>
                                    <div className="col-12 col-sm-7">
                                        <div className="detail_info">
                                            <h6>$ {res?.price || ''}</h6>
                                            <h3>{res?.title || ''}</h3>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-2">
                                        {res?.address?.state_name || ''}
                                    </div>
                                </Row>
                            </a>
                        })}
                </div>
            </Container>
        </section>
    );
}

export default ListProducts;
