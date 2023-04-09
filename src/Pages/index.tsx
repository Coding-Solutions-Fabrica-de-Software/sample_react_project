import React, { FC } from 'react';
import NavBar from 'src/Layouts/navbar';
import MainSwitch from './mainSwitch';

export interface IShellHost {}

const ShellHost: FC<IShellHost> = () => {
  return (
    <main>
      <NavBar />
      <div>
        <MainSwitch />
      </div>
    </main>
  );
};

export default ShellHost;
