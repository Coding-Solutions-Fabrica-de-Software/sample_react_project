import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PopularMoviesActions } from '@redux/MovieDb/PopularMovies/actions';
import { RootState } from '@redux';
import { Avatar, Button, List, Skeleton } from 'antd';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

const HomePage: FC = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState<number>(1);

  const { movies } = useSelector((state: RootState) => {
    return {
      movies: state.movies.popularMovies,
    };
  });

  const getData = useCallback(
    (page: number) => {
      setPage(page);
      dispatch(PopularMoviesActions.fetchPopularMovies(page));
    },
    [dispatch]
  );

  useEffect(() => {
    getData(1);
  }, [dispatch]);

  const loadMore = !movies.isLoading ? (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}>
      <Button
        onClick={() => {
          getData(page + 1);
        }}>
        Carregar mais...
      </Button>
    </div>
  ) : null;

  return (
    <div className={styles.homePage}>
      <List
        itemLayout="horizontal"
        loading={movies.isLoading}
        dataSource={movies.result.results.map((x) => {
          return {
            title: x.title,
            imageUri: `${import.meta.env.VITE_DB_MOVIE_IMAGE_URI}/${x.backdrop_path}`,
            description: x.overview,
          };
        })}
        loadMore={loadMore}
        renderItem={(item, index) => (
          <List.Item
            key={`item-${index}`}
            actions={[
              <Link to="/" key="list-loadmore-more">
                Ver Detalhes
              </Link>,
            ]}>
            <Skeleton avatar title={false} loading={movies.isLoading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.imageUri} />}
                title={`${item.title}`}
                description={item.description}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default HomePage;
