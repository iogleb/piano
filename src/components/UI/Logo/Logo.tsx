import styles from './Logo.module.scss';
import logo from '../../../assets/logo.svg';

function Logo() {
  return (
    <img className={styles.logo} src={logo} alt="logo" />
  );
}

export default Logo;
