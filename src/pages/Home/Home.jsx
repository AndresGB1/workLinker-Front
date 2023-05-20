import React, { useState } from "react";

export const Home = (props) => {    
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center h-100">
      <div className="text-center">
        <h1>Bienvenido al Portal de Solicitudes de Empleo</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
          faucibus justo. Aenean condimentum quam ut fermentum lacinia. In non
          consequat lorem, a tempus tortor. Fusce varius risus vel tortor
          pulvinar, at tristique purus facilisis.
        </p>

        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Solicitantes de Empleo</h5>
                <p className="card-text">
                  ¿Estás buscando empleo? Explora nuestras ofertas de trabajo y
                  solicita hoy mismo tu empleo soñado.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => props.onFormSwitch("jobListings")}
                >
                  Ver Ofertas de Trabajo
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Empleadores</h5>
                <p className="card-text">
                  ¿Eres un empleador? Publica tus vacantes de empleo y encuentra
                  candidatos cualificados para tu empresa.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => props.onFormSwitch("postJob")}
                >
                  Publicar una Vacante
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};