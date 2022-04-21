import './home.scss'
import Header from "../../components/header/header";
import {Container} from "react-bootstrap";
function Home() {
  return (
     <section className="home">
         <Header></Header>
         <Container>
             <div className="content-text">
                 Por favor ingresa tu busqueda.
             </div>
         </Container>
     </section>
  );
}
export default Home;
