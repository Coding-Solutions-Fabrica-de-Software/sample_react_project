import { FC } from 'react';
import { useDispatch } from 'react-redux';
import styles from './details.module.css';
import { useParams } from 'react-router-dom';

const DetailsMoviePage: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  return <div className={styles.detailsPage}>Detalhes do Filme</div>;
};

export default DetailsMoviePage;
