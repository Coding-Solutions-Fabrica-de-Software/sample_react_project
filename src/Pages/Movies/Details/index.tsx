import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './details.module.css';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '@redux';
import { Descriptions, Skeleton } from 'antd';
import { MovieDetailActions } from '@redux/MovieDb/MovieDetail/actions';

const DetailsMoviePage: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movie } = useSelector((state: RootState) => {
    return {
      movie: state.movies.movieDetail,
    };
  });

  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  useEffect(() => {
    dispatch(MovieDetailActions.fetchMovieDetail(+(id || 0)));
  }, [dispatch, id]);

  return (
    <div className={styles.page}>
      <Skeleton title={true} loading={movie.isLoading} active>
        <Descriptions
          title="Detalhes do Filme"
          size={'small'}
          extra={<Link to="/">Voltar ao ínicio</Link>}>
          <Descriptions.Item label="Titulo">{movie.result?.title}</Descriptions.Item>

          <Descriptions.Item label="Média de Votos">
            {movie.result?.vote_average}
          </Descriptions.Item>
          <Descriptions.Item label="Conteudo Adulto">
            {movie.result?.adult ? 'Sim' : 'Não'}
          </Descriptions.Item>
          <Descriptions.Item label="Descrição">
            {movie.result?.overview}
          </Descriptions.Item>
        </Descriptions>
      </Skeleton>
    </div>
  );
};

export default DetailsMoviePage;
