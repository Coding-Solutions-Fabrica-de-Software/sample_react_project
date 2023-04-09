import { ReactKeycloakProvider } from '@react-keycloak/web';
import { FC, PropsWithChildren } from 'react';
import { keycloak } from './Utils';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      autoRefreshToken={true}
      initOptions={{
        onLoad: 'none',
      }}>
      {children}
    </ReactKeycloakProvider>
  );
};

export { AuthProvider, keycloak };