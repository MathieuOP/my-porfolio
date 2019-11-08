import React from 'react';
import Wobble from 'react-reveal/Wobble';
import styles from './Contact.module.scss';
import { IoIosSend }from "react-icons/io";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import TitleComponent from 'components/TitleComponent';

const Contact = () => (
	<>
		<TitleComponent title="Contact" />

		<section style={{height: window.innerHeight}} className={styles.contact}>
			<div className="container">
				<div className="row">
					<Wobble>
						<div className={`${styles.contact__infos} col-10 col-md-10 col-lg-8 col-xl-6`}>
							<h1 className={styles.contact__title}>MES CONTACTS</h1>

							<div className={styles.contact__links}>
								<a className={styles.contact__link} href="mailto:mathieuoliveirapereira@gmail.com" data-toggle="tooltip" data-placement="bottom" title="mathieuoliveirapereira@gmail.com"> M'envoyer un message <IoIosSend size="1.5em" /></a>
								<a className={styles.contact__link} href="https://www.linkedin.com/in/mathieu-pereira/"><FaLinkedin size="3.5em" color="#26252a" /></a>
								<a className={styles.contact__link} href="https://twitter.com/Mathieu_OP"><FaTwitter size="3.5em" color="#26252a" /></a>
							</div>
						</div>
					</Wobble>
				</div>
			</div>
		</section>
	</>
)

export default Contact;