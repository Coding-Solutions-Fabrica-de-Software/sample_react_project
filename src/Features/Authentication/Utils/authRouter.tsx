import { useKeycloak } from '@react-keycloak/web';
import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

interface IAuthRouter {
  userRole?: string;
}

export const AuthRouter: FC<IAuthRouter> = (props) => {
  const { keycloak, initialized } = useKeycloak();

  if (initialized) {
    if (!keycloak.authenticated) {
      keycloak?.login();
      return null;
    } else if (props.userRole) {
      if (!keycloak.hasRealmRole(props.userRole)) {
        return <Navigate to={'/'} replace />;
      }
    }
  } else {
    return <Navigate to={'/'} replace />;
  }

  return <Outlet />;
};
