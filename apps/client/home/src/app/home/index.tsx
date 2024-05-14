'use client'
import * as React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
  Logo,
  Header,
  Button,
  Nav,
  Welcome,
  Card,
  Input,
} from '@isa-exercise/ui';
import {
  gqlClient,
  logout,
  useGlobalSync,
  useQuery,
} from '@isa-exercise/state';
import { Login } from '../login';
import { useNavigate } from 'react-router-dom';
import {
  GetAllIsaOptionsDocument,
  GetMyIsaDocument,
  GetMyPensionDocument,
} from 'libs/shared/state/gql/graphql';

export function Home() {
  const [pension, setPension] = React.useState<any>();

  const Pension = React.lazy(() => import('pension/Module'));
  const Isa = React.lazy(() => import('isa/Module'));
  const navigate = useNavigate();

  const links = [{ to: '/', title: 'Home' }];
  const {
    store: { auth },
  } = useGlobalSync();

  if (auth) {
    links.push({ to: '/pension', title: 'Pension' });
    const hasPension = pension?.getMyPension;
    if (!hasPension) {
      links.push({ to: '/isa', title: 'ISA' });
    }
  }
  const handleLogout = async () => {
    logout(() => {
      navigate('/');
    });
  };

  React.useEffect(() => {
    gqlClient.request(GetMyPensionDocument).then((res) => {
      setPension(res.getMyPension);
      console.log('GetMyPensionDocument', res);
    });
  }, []);

  console.log(pension);
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
          <NavLink to="/login">
            <Button buttonType="primary">LOG IN</Button>
          </NavLink>
        )}
      </Header>
      <Routes>
        <Route path="/" element={<Welcome title="Home" />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/pension" element={<Pension />} />
        <Route path="/isa" element={<Isa />} /> */}
      </Routes>
      {auth ? (
        pension ? (
          <Card title="Your Pension">
            <h3>Employer : {pension?.employer}</h3>
            <h3>Savings : {pension?.savings}</h3>
          </Card>
        ) : (
          <Isa />
        )
      ) : null}
    </React.Suspense>
  );
}

export default Home;
