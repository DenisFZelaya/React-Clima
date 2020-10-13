import React, { Component } from "react";

class Formulario extends Component {

  //Crear los ref
  cuidadRef = React.createRef();
  paisRef = React.createRef();

    buscarClima = e => {
        e.preventDefault();
        
        //Leer los ref y crear el objeto
        const respuesta = {
          cuidad: this.cuidadRef.current.value,
          pais: this.paisRef.current.value
        }

        //Enviar por props
        this.props.datosConsulta(respuesta);

        //Opcional resetear el formulario
        
    }

  render() {
    return (
      <div className="contenedor-form ">
        <div className="container">
          <div className="row">
            <form onSubmit={this.buscarClima}>
              <div className="input-field col s12 m8 l4 offset-m2 ">
                <input type="text" id="ciudad" 
                ref= {this.cuidadRef}/>
                <label htmlFor="cuidad">Ciudad: </label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.paisRef}>
                  <option value="" defaultValue>
                    Elige un pais
                  </option>
                  <option value="HN">Honduras</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">Espana</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">Mexico</option>
                  <option value="PE">Peru</option>
                </select>
                <label htmlFor="pais">Pais: </label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2 buscador">
                <input
                  type="submit"
                  className="waves-effect waves-light btn-large yellow accent-4"
                  value="Buscar..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;
