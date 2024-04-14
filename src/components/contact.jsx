import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../components/contactpopup.css'

export const Contact = (props) => {

  const form = useRef();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [buttonPopup, setButtonPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c37z7k7', 'template_grvkzdo', form.current, 'EjcIfvUgiTH1WWIfw')
      .then((result) => {
        console.log(result.text);
        setButtonPopup(true);

        setTimeout(() => {
          setButtonPopup(false);
        }, 3000); // 4000 milisegundos = 4 segundos
      })
      .catch((error) => {
        console.log(error.text);
      });
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Ponte en contacto</h2>
                <p className='formP'>
                  Por favor, complete todos los campos para poder asistirle lo antes posible. ¡Gracias!
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail} >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="user_name"
                        className="form-control"
                        placeholder="Nombre"
                        required
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="user_email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={correo}
                        onChange={(event) => setCorreo(event.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    value={mensaje}
                    onChange={(event) => setMensaje(event.target.value)}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" value="Send" className="btn btn-custom btn-lg" onClick={() => setButtonPopup(true)}>
                  Enviar Mensaje
                </button>
              </form>
              {buttonPopup && (
                <div className='popup'>
                  <div className="popup-inner">
                    <div className="popuptextcontainer">
                      <h3 className='popup-title'>Mensaje enviado exitosamente.</h3>
                      <p>¡¡Te contactaremos lo antes posible, gracias!!</p>
                    </div>
                    <button className="close-btn" onClick={() => setButtonPopup(false)}>Cerrar</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Información de contacto</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Dirección
                </span>
                <a className="contact-address" href='https://www.google.com/maps/place/Arequipa/@-16.403966,-71.5802115,13z/data=!4m6!3m5!1s0x91424a487785b9b3:0xa3c4a612b9942036!8m2!3d-16.4090474!4d-71.537451!16zL20vMDFweTg3?entry=ttu' target='_blank' rel="noreferrer">
                  {props.data ? props.data.address : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefonos
                </span>{" "}
                <a className="contact-phone" href='https://wa.me/+51959938183' target='_blank' rel='noreferrer' >
                  {props.data ? props.data.phone : "loading"}
                </a>
                <br />
                <a className="contact-phone" href='https://wa.me/+51959220048' target='_blank' rel='noreferrer'>
                  {props.data ? props.data.phone2 : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                <a className="contact-email" href="https://mail.google.com/mail/?view=cm&fs=1&to=jzeballos@llatan.pe" target='_blank' rel='noreferrer'>
                  {props.data ? props.data.email : "loading"}
                </a>
                <br />
                <a className="contact-email" href="https://mail.google.com/mail/?view=cm&fs=1&to=pvargas@llatan.pe" target='_blank' rel='noreferrer'>
                  {props.data ? props.data.email2 : "loading"}
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "https://www.facebook.com/llatan.pe?locale=es_LA"} target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "https://twitter.com/llatan_pe"} target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "https://www.linkedin.com/company/llatan/"} target="_blank" rel="noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Todos los derechos reservados. Desarrollado por{" "}
            <a href="https://www.linkedin.com/company/llatan/about/" target="_blank" rel="noreferrer">
              Llatan S.A.C
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};













// const [{ name, email, message }, setState] = useState(initialState);

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setState((prevState) => ({ ...prevState, [name]: value }));
// };
// const clearState = () => setState({ ...initialState });

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(name, email, message);
//   emailjs
//     .sendForm("gmail", "template_grvkzdo", e.target, "3w82Rj1o65oNl6pgE")
//     .then(
//       (result) => {
//         console.log(result.text);
//         clearState();
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
// };

