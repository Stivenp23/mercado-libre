import './home.css'
import InputSearch from "../../components/input-search/input-search";
function Home() {
  return (
      <div className="container">
          <header>
              <div className="row">
                  <div className="col">
                      <a className="logo"
                         href="//www.mercadolibre.com.co"
                         rel="noreferrer"
                      target="_blank">
                          <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png" alt=""/>
                      </a>
                  </div>
                  <div className="col">
                      <div className="input-container">
                          <InputSearch></InputSearch>
                      </div>
                  </div>
              </div>
          </header>
      </div>
  );
}
export default Home;
