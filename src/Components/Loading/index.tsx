import { FC } from 'react';
import styles from './loading.module.css';
import { Spin } from 'antd';

interface ILoading {
  title?: string;
}

export const Loading: FC<ILoading> = ({ title }) => {
  return (
    <div className={styles.container}>
      <Spin />
      {title || 'Carregando...'}
    </div>
  );
};
