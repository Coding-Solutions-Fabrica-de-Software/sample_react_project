import React, { FC, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Movies/Home';
import { AuthRouter } from '@features';
import DetailsMoviePage from './Movies/Details';

const MainSwitch: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<AuthRouter userRole="admin" />}>
          <Route path="/detail/:id" element={<DetailsMoviePage />} />

          <Route path="/detail/:id/admin" element={<DetailsMoviePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default memo(MainSwitch);
