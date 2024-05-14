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
import { gqlClient } from '@isa-exercise/state';
import {
  GetMyIsaDocument,
} from 'libs/shared/state/gql/graphql';

export function MyIsa() {
  const [myIsa, setMyIsa] = React.useState<any>();

  function handleSelect() {
    throw new Error('Function not implemented.');
  }

  React.useEffect(() => {
    gqlClient.request(GetMyIsaDocument).then((res) => {
      setMyIsa(res.getMyIsa);
      console.log('GetMyIsaDocument', res);
    });
  }, []);

  return (
    <React.Suspense fallback={null}>
      <div style={{ display: 'flex', marginLeft: '24px' }}>
        <Card
          title={myIsa.id}
          footer={
            <Button
              onClick={() => {
                 handleSelect();
              }}
              buttonType="primary"
            >
              Delete
            </Button>
          }
        ></Card>
      </div>
    </React.Suspense>
  );
}

export default MyIsa;
