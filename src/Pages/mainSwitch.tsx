import React, { FC, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Movies/Home';
import { AuthRouter } from '@features';
import DetailsMoviePage from './Movies/Details';
import NoAuthorizedPage from './Auth/NoAuthorized';

const MainSwitch: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/no-authorized" element={<NoAuthorizedPage />} />

        <Route element={<AuthRouter userRole="admin" />}>
          <Route path="/detail-admin/:id" element={<DetailsMoviePage />} />
        </Route>

        <Route element={<AuthRouter />}>
          <Route path="/detail/:id" element={<DetailsMoviePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default memo(MainSwitch);
