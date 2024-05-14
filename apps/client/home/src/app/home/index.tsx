'use client';
import * as React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Logo, Header, Button, Nav, Welcome } from '@isa-exercise/ui';
import {
  getMyPensions,
  logout,
  useGlobalSync,
  whoAmI,
} from '@isa-exercise/state';
import { Login } from '../login';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Home() {
  const Pension = React.lazy(() => import('pension/Module'));
  const Isa = React.lazy(() => import('isa/Module'));
  const navigate = useNavigate();

  const links = [{ to: '/', title: 'Home' }];
  const {
    store: { auth, myPension },
  } = useGlobalSync();

  if (auth) {
    links.push({ to: '/pension', title: 'Pension' });
    const hasPension = myPension;
    if (!hasPension) {
      links.push({ to: '/isa', title: 'ISA' });
    }
  }

  const handleLogout = async () => {
    logout(() => {
      navigate('/');
    });
  };

  useEffect(() => {
    getMyPensions();
    whoAmI();
  }, []);

  if (!auth) {
    navigate('/');
  }

  useEffect(() => {}, [myPension]);

  return (
    <React.Suspense fallback={null}>
      <Header>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <Nav links={links} />
        {auth ? (
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <h3 style={{ color: 'rgb(229, 45, 144)' }}>{auth?.fullName}</h3>
            <Button buttonType="secondary" onClick={handleLogout}>
              LOG OUT
            </Button>
          </div>
        ) : (
          <Button
            buttonType="primary"
            onClick={() => {
              navigate('/login');
            }}
          >
            LOG IN
          </Button>
        )}
      </Header>
      <Routes>
        <Route path="/" element={<Welcome title="Home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pension" element={<Pension />} />
        <Route path="/isa" element={<Isa />} />
      </Routes>
    </React.Suspense>
  );
}

export default Home;
