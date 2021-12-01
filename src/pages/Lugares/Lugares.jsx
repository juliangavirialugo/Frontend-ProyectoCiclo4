import { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import { NavLink } from "react-router-dom";
const apiLugares = "https://backend-grupo-03.herokuapp.com/api/lugares";

const Lugares = () => {
  const [lugar, setLugar] = useState([]);
  const [name, setName] = useState([]);

  useEffect(async () => {
    await axios.get(apiLugares).then((res) => {
      setLugar(res.data);
    });
    console.log(lugar);
  }, []);
  
  return (
    <div style={{ marginLeft: "12%" }}>
      {lugar.map((i) => {
        return (
          <div
            className="card"
            style={{
              width: "26rem",
              display: "inline-flex",
              margin: "25px",
              borderRadius: "20px",
            }}
          >
            <NavLink to={"/informacion/" + i._id + "/" + i.name}>
              <img
                id="imagen"
                src={i.url}
                style={{ maxHeight: "340px", minHeight: "340px" }}
                className="card-img-top"
                alt={i.name}
              />
            </NavLink>
            <div className="card-body">
              <h5 className="card-title">{i.name}</h5>

              <p className="card-text">{i.description}</p>

              <NavLink to={"/informacion/" + i._id + "/" + i.name}>
                <strong>Mas Informacion...</strong>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};
//style={{minHeight:'180px',maxHeight:'180px'}}
export default Lugares;
