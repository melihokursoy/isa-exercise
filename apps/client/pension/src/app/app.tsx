import { gqlClient, useGlobalSync, useQuery } from '@isa-exercise/state';
import { Card, Welcome } from '@isa-exercise/ui';
import { GetMyPensionDocument } from 'libs/shared/state/gql/graphql';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    gqlClient.request(GetMyPensionDocument).then((res) => {
      setData(res.getMyPension);
      console.log('res====>', res);
    });
  }, []);

  return (
    <StyledApp>
      <Welcome title="Pension" />
      {/* {data?.getMyPension ? (
        <Card title="Your Pension">
          <h3>Employer : {data?.getMyPension?.employer}</h3>
          <h3>Savings : {data?.getMyPension?.savings}</h3>
        </Card>
      ) : null} */}
    </StyledApp>
  );
}

export default App;
