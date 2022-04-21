import Header from "../../components/header/header";
import {Container, Row} from "react-bootstrap";
import './detail-product.scss';
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function DetailsProduct() {
    const params = useParams()
    const [dataEnd, setData] = useState({title: '', pictures: [{url: ''}], price: ''});
    const [dataEndDescription, setDataDescription] = useState('');
    useEffect(() => {
        axios.get('https://api.mercadolibre.com/items/' + params?.id, {})
            .then((res: any) => {
                setData(res?.data)
            })
            .catch(function (error: any) {
                console.log(error);
            });
        axios.get('https://api.mercadolibre.com/items/' + params?.id + '/description', {})
            .then((res: any) => {
                setDataDescription(res?.data?.plain_text)
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }, []);

    return (
        <section className="detail">
            <Header></Header>
            <Container>
                <div className="detail__content">
                    <Row>
                        <div className="col-12 col-sm-8">
                            <div className="image">
                                <img src={dataEnd?.pictures[0]?.url || ''}/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="info">
                                <p>Nuevo</p>
                                <h1>{dataEnd?.title || ''}</h1>
                                <span className='price'>$ {dataEnd?.price || ''}</span>
                                <button>Comprar</button>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-12 col-sm-8">
                            <h3>Descripción del producto</h3>
                            <p className="description">{dataEndDescription}</p>
                        </div>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default DetailsProduct;
