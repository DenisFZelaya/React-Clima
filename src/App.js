import React from 'react';
import './css/index.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';

class App extends React.Component {

  state = {
    error: false,
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.consulta !== this.state.consulta) {
      this.consultarApi();
    }
  }

  consultarApi = () => {
    const {cuidad, pais} = this.state.consulta;
    if(!cuidad || !pais) return null;

       //Leer la url y agrgar el api key
    const appId = '827bcfaf58cb04c32014edb0f3fbf631';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cuidad},${pais}&appid=${appId}`;

    //Query con fetch api
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {

        //Agregar respuesta a state
        this.setState({
          resultado: datos
        })

      })
      .catch(error => {
        console.log(error);
      })
  }

  datosConsulta = respuesta => {
    if(respuesta.ciudad === '' || respuesta.pais === '') {
      this.setState ({
        error: true
      })
    }else {
      this.setState ({
        consulta: respuesta,
        error: false
      })
    }
  }


  render() {

    const error = this.state.error;

    let resultado;

    if(error) {
      resultado = <Error mensaje={"Ambos campos son obligatorios"} />
    } else {
      resultado = <Clima 
        resultado={this.state.resultado}
      />
    }

    return (
      <div className="App">
       <Header 
        titulo='Clima React'
       />
       <Formulario
        datosConsulta = {this.datosConsulta}
       />
        {resultado}
      </div>
    );
  }
}

export default App;
