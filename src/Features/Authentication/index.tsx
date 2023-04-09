import { ReactKeycloakProvider } from '@react-keycloak/web';
import { FC, PropsWithChildren } from 'react';
import { AuthRouter, keycloak } from './Utils';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      autoRefreshToken={true}
      initOptions={{
        onLoad: 'check-sso',
        pkce: 's256',
      }}>
      {children}
    </ReactKeycloakProvider>
  );
};

export { AuthProvider, keycloak, AuthRouter };
