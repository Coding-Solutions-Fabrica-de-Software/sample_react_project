import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './details.module.css';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '@redux';
import { Descriptions } from 'antd';

const DetailsMoviePage: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movies } = useSelector((state: RootState) => {
    return {
      movies: state.movies.popularMovies,
    };
  });

  const findMovieList = movies.result.results.find((x) => x.id === +(id || 0));

  return (
    <div className={styles.page}>
      <Descriptions
        title="Detalhes do Filme"
        size={'small'}
        extra={<Link to="/">Voltar ao ínicio</Link>}>
        <Descriptions.Item label="Titulo">{findMovieList?.title}</Descriptions.Item>
        <Descriptions.Item label="Média de Votos">
          {findMovieList?.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="Conteudo Adulto">
          {findMovieList?.adult ? 'Sim' : 'Não'}
        </Descriptions.Item>
        <Descriptions.Item label="Descrição">{findMovieList?.overview}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default DetailsMoviePage;
