import React from 'react';
import { Link } from "react-router-dom";
import styles from './MyNavBar.module.scss';
import { MdDesktopWindows, MdHome, MdBuild } from 'react-icons/md';
import { FaRegUser, FaEnvelope } from 'react-icons/fa';

const MyNavBar = () => (
	<>
		<nav className={styles.menu}>
			<ul className={styles.menu__list}>
				<li className={styles.menu__element}>
					<Link className={styles.menu__link} to="/">
						<MdHome color="#fff" size={window.innerWidth < 1440 ? '1.8em' : '2.3em'} />
					</Link>
				</li>

				<li className={styles.menu__element}>
					<Link className={styles.menu__link} to="/profile">
						<FaRegUser size={window.innerWidth < 1440 ? '1.5em' : '2em'} />
					</Link>
				</li>

				<li className={styles.menu__element}>
					<Link className={styles.menu__link} to="/competences">
						<MdBuild color="#fff" size={window.innerWidth < 1440 ? '1.5em' : '2em'} />
					</Link>
				</li>

				<li className={styles.menu__element}>
					<Link className={styles.menu__link} to="/portfolio">
						<MdDesktopWindows size={window.innerWidth < 1440 ? '1.5em' : '2em'} />
					</Link>					
				</li>

				<li className={styles.menu__element}>
					<Link className={styles.menu__link} to="/contact">
						<FaEnvelope color="#fff" size={window.innerWidth < 1440 ? '1.5em' : '2em'} />
					</Link>
				</li>
			</ul>
		</nav>
	</>
);

export default MyNavBar;