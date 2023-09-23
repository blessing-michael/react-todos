import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header
      style={{
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
      }}
      className={styles.header}
    >
      <h1>My T0D0 List</h1>
      <p>Items are persist in the browser local storage</p>
    </header>
  );
};
export default Header;
