import { FC } from 'react';
import { useDispatch } from 'react-redux';
import styles from './details.module.css';
import { Link, useParams } from 'react-router-dom';

const DetailsMoviePage: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <div className={styles.page}>
      Detalhes do Filme
      <Link to="/">Voltar ao ínicio</Link>
    </div>
  );
};

export default DetailsMoviePage;
