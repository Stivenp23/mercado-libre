import './header.scss'
import InputSearch from "../input-search/input-search";
import {Container, Row} from "react-bootstrap";

function Header() {
    return (
        <header>
            <Container>
                <Row>
                    <div className="col-4 col-sm-2">
                        <a className="logo"
                           href="/"
                           rel="noreferrer"
                        >
                            <img
                                src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png"
                                alt=""/>
                        </a>
                    </div>
                    <div className="col-8 col-sm-10">
                        <div className="input-container">
                            <InputSearch></InputSearch>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
