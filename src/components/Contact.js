import React from 'react';

// library
import Wobble from 'react-reveal/Wobble';

// file scss
import './style/contact.scss';

// icons
import { IoIosSend }from "react-icons/io";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

// component
import TitleComponent from './TitleComponent';

const Contact = () => (

	<React.Fragment>
		<TitleComponent title="Contact" />

		<section className="contact">
			<div className="container">
				<div className="row">
					<Wobble>
						<div className="contact__infos col-10 col-md-10 col-lg-8 col-xl-6">
							<h1 className="contact__title">MES CONTACTS</h1>

							<div className="contact__links">
								<a className="contact__link" href="mailto:mathieuoliveirapereira@gmail" data-toggle="tooltip" data-placement="bottom" title="mathieuoliveirapereira@gmail.com"> M'envoyer un message <IoIosSend size="1.5em" /></a>
								<a className="contact__link" href="https://www.linkedin.com/in/mathieu-pereira/"><FaLinkedin size="3.5em" color="#26252a" /></a>
								<a className="contact__link" href="https://twitter.com/Mathieu_OP"><FaTwitter size="3.5em" color="#26252a" /></a>
							</div>
						</div>
					</Wobble>
				</div>
			</div>
		</section>
	</React.Fragment>
)

export default Contact;