import * as React from "react";
import logo from "../../images/Logo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    
      <nav class="navbar navbar-expand-lg  bg-color">
        <div class="container-fluid col-lg-6 col-md-6 col-sm-12 mb-2 mt-2">
        <Link to="/">

          <img
            src={logo}
            className="logo"
            alt="Logo"
            style={{
              width: "50%",
              marginLeft: "10%",
              height: "auto",
            }}
            
          />
            </Link>
        </div>
              {sessionStorage.getItem("user") ? (
                <div class="container-fluid col-lg-6 col-md-6 col-sm-12 mb-2 mt-2">
        
                    <Button

                      style={{
                        width: "20%",
                        height: "auto",
                        background: "#CDFF06",
                        border: "none",
                        color: "black",
                        marginRight: "20px",
                        fontWeight: "bold",
                        paddingRigth: "120%   ",
                      }}
                      onClick={() => {
                        sessionStorage.removeItem("user");
                        window.location.href = "/";
                      }
                      }
                    >
                      Logout
                    </Button>
                </div>
              ) : (
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                <Button
                  className="SingUp"
                  style={{
                    width: "20%",
                    height: "auto",
                    background: "#CDFF06",
                    border: "none",
                    color: "black",
                    marginRight: "20px",
                    fontWeight: "bold",
                    paddingRigth: "120%   ",
                  }}
                  as={Link}
                  to="/register"
                >
                  Registrarse
                </Button>
      
                <Button
                  variant="dark"
                  style={{
                    width: "20%",
                    height: "auto",
                    border: "none",
                    marginRight: "7%",
                    fontWeight: "bold",
                  }}
                  as={Link}
                  to="/newLogin"
                >
                  Iniciar sesion
                </Button>
              </div>
              )
              }
     
      </nav>
    
  );
};
