import { ConfigProvider, Layout } from 'antd';
import pt_BR from 'antd/es/locale/pt_BR';
import { FC, PropsWithChildren } from 'react';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider locale={pt_BR}>
      <Layout>{children}</Layout>
    </ConfigProvider>
  );
};
