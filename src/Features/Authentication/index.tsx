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
        pkceMethod: 'S256',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      }}>
      {children}
    </ReactKeycloakProvider>
  );
};

export { AuthProvider, keycloak, AuthRouter };
