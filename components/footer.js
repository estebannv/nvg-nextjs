
import Image from 'next/image';
import Logo from '../public/logo.png';

export default function Footer() {

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/form'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Datos enviados: ${result.data}`)
    }

    return (
        <div>
            <footer id="site-footer" className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
                            <div className="widget-footer">
                                <a href="index.html">
                                    <Image src={Logo} alt="Logo" />
                                </a>
                                <p className="mt-2">We provides a full range of interior design, architectural design.</p>
                                <div className="footer-social list-social">
                                    <ul>
                                        <li><a href="http://instagram" target="_self"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="http://linkedin.com" target="_self"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
                            <div className="widget-footer">
                                <h6>Contacto</h6>
                                <ul className="footer-list">
                                    <li className="footer-list-item">
                                        <span className="list-item-icon"><i className="ot-flaticon-place"></i></span>
                                        <span className="list-item-text">Escazú, San José, Costa Rica</span>
                                    </li>
                                    <li className="footer-list-item">
                                        <span className="list-item-icon"><i className="ot-flaticon-mail"></i></span>
                                        <span className="list-item-text">navarro.roger@gmail.com</span>
                                    </li>
                                    <li className="footer-list-item">
                                        <span className="list-item-icon"><i className="ot-flaticon-phone-call"></i></span>
                                        <span className="list-item-text">+506 8386-6945</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                            <div className="widget-footer widget-contact">
                                <h6>Latest Projects</h6>
                                <ul>
                                    <li><a href="#">Stylish Family Appartment</a></li>
                                    <li><a href="#">Modern Villa in Belgium</a></li>
                                    <li><a href="#">Private House in Spain</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                            <div className="widget-footer footer-widget-subcribe">
                                <h6>Envíanos un mensaje</h6>
                                <form className="mc4wp-form" onSubmit={handleSubmit}>
                                    <div className="mc4wp-form-fields">
                                        <div className="subscribe-inner-form">
                                            <input type="text" name="name" placeholder="Nombre completo" required />
                                            <input type="email" name="email" placeholder="Correo electrónico" required />
                                            <textarea name="message" id="message" cols="40" rows="10" placeholder="Mensaje..." required></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="send" className="octf-btn">Enviar mensaje</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                <div className="container">
                            <p>Copyright © 2023 Sitio web creado por <a className="text-light" href="#">Esteban Navarro</a>.</p>
                </div>
            </div>
        </div>);
}