import { useKeycloak } from '@react-keycloak/web';
import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Loading } from 'src/Components';

interface IAuthRouter {
  userRole?: string;
}

export const AuthRouter: FC<IAuthRouter> = (props) => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <Loading title="Autenticando..." />;
  }

  if (!keycloak.authenticated) {
    keycloak?.login();
  } else if (props.userRole && !keycloak.hasRealmRole(props.userRole)) {
    return <Navigate to={'/no-authorized'} replace />;
  }

  return <Outlet />;
};
