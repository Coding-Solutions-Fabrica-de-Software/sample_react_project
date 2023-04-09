import { FC } from 'react';
import styles from './no-authorized.module.css';
import { Link } from 'react-router-dom';

const NoAuthorizedPage: FC = () => {
  return (
    <div className={styles.page}>
      <span>Não autorizado para ver este página</span>
      <Link to="/">Voltar ao ínicio</Link>
    </div>
  );
};

export default NoAuthorizedPage;
