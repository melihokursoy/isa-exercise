import { gqlClient, useGlobalSync, useQuery } from '@isa-exercise/state';
import { Button, Card, Welcome } from '@isa-exercise/ui';
import { GetMyPensionDocument } from 'libs/shared/state/gql/graphql';
import { useEffect, useState } from 'react';
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

  useEffect(() => {}, [myPension]);

  return (
    <StyledApp>
      <Welcome title="Pension" />
      {myPension ? (
        <Card title="Your Pension">
          <h3>Employer : {myPension?.employer}</h3>
          <h3>Savings : {myPension?.savings}</h3>
        </Card>
      ) : (
        <Card title="Your Pension">
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
