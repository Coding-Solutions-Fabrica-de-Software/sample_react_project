import { FC, useCallback, useEffect } from 'react';
import { Dropdown, Layout, Menu, Space } from 'antd';
import { useKeycloak } from '@react-keycloak/web';
import { keycloak } from 'src/Features/Authentication';
import styles from './navBar.module.css';
import { DownOutlined } from '@ant-design/icons';

const { Header } = Layout;

const NavBar: FC = () => {
  const {
    keycloak: { authenticated, tokenParsed },
    initialized,
  } = useKeycloak();

  const login = useCallback(() => {
    keycloak.login();
  }, [initialized]);

  const logout = useCallback(() => {
    keycloak.logout();
  }, [initialized]);

  return (
    <Header className={styles.navBar}>
      Seja bem-vindo{authenticated ? ' - ' : ''}
      {tokenParsed?.preferred_username}
      <Dropdown
        className={styles.menu}
        menu={{
          items: [
            {
              label: authenticated ? 'Sair da Conta' : 'Entrar na Conta',
              key: 'profile',
              onClick: authenticated ? logout : login,
            },
          ],
        }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Meu Perfil
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </Header>
  );
};

export default NavBar;
