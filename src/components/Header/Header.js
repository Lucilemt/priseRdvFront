import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../Button/Button.style";




function Header() {
    const params = useParams();
    
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div>
            <Link to="/" className="logo d-flex justify-content-start messoinslogo">
              <img
                id="caducee"
                src="/caduceeV1_logo.png"
                alt="caducee"
              />
              <p id="messoins">messoins.fr</p>
            </Link>
          </div>
          <div className="boutonsconnexion d-flex justify-content-end">
            <Button backgroundColor="#FA7BC9" data-bs-toggle="modal" data-bs-target="#exampleModal" >Se connecter</Button>
            <Button backgroundColor="#5E17EB" data-bs-toggle="modal" data-bs-target="#pratModal" >Accès pour les professionnels</Button>
            {/* {params.id?<button id="connexionPatient" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Se connecter
            </button>:<button id="patientConnected" className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">
              Votre profil
            </button>} */}
            {console.log(params.id)}
            {/* {params.id?<button className="btn" id="psConnected" >
              Votre profil professionnel
            </button>:<button id="connexionPS" className="btn" data-bs-toggle="modal" data-bs-target="#pratModal">
            Accès pour les professionnels
            </button>} */}
          </div>
        </div>
      </div>

        {/* <!-- Modal --> */}
        <div class="modal fade modalBoxPatient" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Connexion pour les patients</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-8 col-lg-6 col-xl-3">
                            <img
                            src="/doctorF-logo.png"
                            class="img-fluid"
                            alt="docteur_logo"
                            />
                        </div>
                        <div class="col-md-9 col-lg-6 col-xl-6 offset-xl-1">
                            <form action="http://localhost:5001/api/login" method="post">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                                    <input type="password" name="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Rester connecté</label>
                                </div>
                                <Button backgroundColor="#FA7BC9" data-bs-toggle="modal" data-bs-target="#exampleModal" >Se connecter</Button>
                            </form>
                        </div>
                    </div>
                    {/* <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
        <div class="modal fade modalBoxPatient" id="pratModal" tabindex="-1" aria-labelledby="pratModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="pratModalLabel">Connexion pour les patients</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-8 col-lg-6 col-xl-3">
                            <img
                            src="/doctorF-logo.png"
                            class="img-fluid"
                            alt="docteur_logo"
                            />
                        </div>
                        <div class="col-md-9 col-lg-6 col-xl-6 offset-xl-1">
                            <form action="http://localhost:5001/api/login" method="post">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                                    <input type="password" name="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Rester connecté</label>
                                </div>
                                <Button backgroundColor="#5E17EB" data-bs-toggle="modal" data-bs-target="#exampleModal" >Se connecter</Button>
                            </form>
                        </div>
                    </div>
                    {/* <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                    {/* </div> */}
                </div>
            </div>
        </div>

    </React.Fragment>
  );
}

export default Header;
