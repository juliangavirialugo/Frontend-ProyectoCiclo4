import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

const EditarReserva = () => {

    const [id, setId] =useState("");
    const [reserva, setReserva] = useState([])

    const obtenerFormulario =() =>{
        axios.get("http://localhost:500/api/formulario")
        .then((respuesta)=>{
            setReserva(respuesta.data)
            console.log(respuesta.data);
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        obtenerFormulario();


    },[])
    // const handleEdit = async (e) => {
    //     e.preventDefault();
    //     await axios.get("https://localhost:5000/api/formulario/"+id).then(res=>{
    //       console.log("Excelente")
    //       console.log(res.data)
    //       setReserva(res.data)
    //     })
    //   }
    
    return(
    <React.Fragment>
        <div className="container">

            <textarea name="" id="" cols="30" rows="10">
                {reserva.map((reserva)=>
                <reserva
                key={reserva.name}
                fecha={reserva.fecha}
                />)}
            </textarea>

            {/* <form >
            <fieldset>
            <legend className="text-center card-header fw-bolder">
              <h1>Por favor seleccione los datos que desa cambiar</h1>
            </legend>
            <label for="floatingInput">Nombre completo:</label>
            <div className="mb-3">
              <input
                onChange={e => setName(e.target.value)}
                value={name}
                name="nombre"
                
                type="name"
                class="form-control"
                id="floatingInput"
                placeholder="Nombre"
                autocomplete="off"
              />
              
            </div>
            <label for="floatingInput">Correo electrónico:</label>
            <div className="mb-3">
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                class="form-control"
                id="floatingEmail"
                placeholder="nombre@example.com"
                autocomplete="off"
              />
              
            </div>

            <div className="mb-3">
              <label for="disabledSelect" className="form-label">
                Escoge un lugar para tu aventura:{" "}
              </label>
              <select
                id="disabledSelect"
                onChange={e => setLugar(e.target.value)}
                value={lugar}
                className="form-select"
              >
                <option> </option>
                <option>Catedral de sal</option>
                <option>Laguna de Guatavita </option>
                <option>Salto del Tequendama</option>
                <option>Fundación Parque Jaime Duque</option>
                <option>Monumento Campesino</option>
                <option>Mina De Sal De Nemocón</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="disabledTextInput" className="form-label">
                Fecha de reservación:{" "}
              </label>
              <input
                onChange={e => setFecha(e.target.value)}
                value={fecha}
                type="date"
                id="disabledTextInput"
                className="form-control"
                placeholder="Fecha"
              />
            </div>
            <div className="mb-3">
              <label for="disabledTextInput" className="form-label">
                Numero de personas:{" "}
              </label>
              <input
                onChange={e => setPerson(e.target.value)}
                value={person}
                type="number"
                id="disabledTextInput"
                className="form-control"
                placeholder="Número de personas"
              />
            </div>
            <div className="mb-3">
              <label for="disabledTextInput" className="form-label">
                Numero de días de la reservación:{" "}
              </label>
              <input
                onChange={e => setDia(e.target.value)}
                value={dia}
                type="number"
                id="disabledTextInput"
                className="form-control"
                placeholder="Número de dias"
              />
            </div>

            <button
            //   onClick={handleEdit}
              type="submit"
              className="btn btn-primary"
            >
              Confirmar cambios
            </button>
            

          </fieldset>   
            </form> */}
        </div>

    </React.Fragment>
        
     );
}
 
export default EditarReserva;