import { getMyPensions, useGlobalSync } from '@isa-exercise/state';
import { Button, Card, Welcome } from '@isa-exercise/ui';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const navigate = useNavigate();

  const {
    store: { auth, myPension },
  } = useGlobalSync();

  useEffect(() => {getMyPensions()}, []);

  if (!auth) {
    navigate('/');
  }


  return (
    <StyledApp>
      <Welcome title="Pension" />
      {auth && myPension ? (
        <Card title="Your Pension Details">
          <h3>Employer : {myPension?.employer}</h3>
          <h3>Savings : {myPension?.savings}</h3>
        </Card>
      ) : (
        <Card title="Your Pension Details">
          <h3>No Pension found 🥲</h3>
          <Button
            onClick={() => {
              navigate('/isa');
            }}
            buttonType="primary"
          >
            How about ISA?
          </Button>
        </Card>
      )}
    </StyledApp>
  );
}

export default App;
