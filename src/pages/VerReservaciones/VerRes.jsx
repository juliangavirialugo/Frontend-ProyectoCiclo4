import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

const VerReservacion = () => {
  const [email, setEmail] = useState("");
  const [reserva, setReserva] = useState([])

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.get("https://backend-grupo-03.herokuapp.com/api/formulario/"+email).then(res=>{
      console.log("Exclente")
      console.log(res.data)
      setReserva(res.data)
    })
  }




  return (
    <React.Fragment>
      <div className="container">
        <form>
          <fieldset>
            <legend className="text-center card-header fw-bolder">
              <h1>Ver reservaciones realizadas</h1>
            </legend>
            <div class="form-floating mb-3">
              <input
                type="input"
                class="form-control"
                id="floatingInput"
                placeholder="name"
              />
              <label for="floatingInput">
                Nombre de la persona que hizo la reserva
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
              onChange={e=>setEmail(e.target.value)}
              value={email}
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">
                Correo con el que hizo la reserva
              </label>
            </div>
            <div className="container">
              <button onClick={handleClick} type="submit" className="btn btn-primary">
                Ver reserva
              </button>
            </div>
          </fieldset>
        </form>
        <table style={{margin:'3rem 0px 3.5rem'}} className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Atraccion Turistica</th>
              <th>Fecha</th>
              <th># Personas</th>
              <th># Dias</th>
            </tr>
          </thead>
          <tbody>
                  

          {
              reserva.map(i=>{
                return(
                  
                  <tr>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.lugar}</td>
                    <td>{i.fecha}</td>
                    <td>{i.person}</td>
                    <td>{i.dia}</td>
                  </tr>
                )
              })
              
            }
            
          
            </tbody> 
        </table>
        {
          reserva.length===0?
          <p style={{textAlign:'center',marginBottom:'10rem'}}>No hay reservas</p>:
          <p style={{textAlign:'center',marginBottom:'10rem'}}>Hay ({reserva.length}) reservas asociadas a este correo.</p>
        }
      </div>
    </React.Fragment>
  );
};
export default VerReservacion;
