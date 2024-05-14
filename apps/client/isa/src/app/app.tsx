import { gqlClient } from '@isa-exercise/state';
import { Button, Card, Input, Welcome } from '@isa-exercise/ui';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  CreateIsaDocument,
  GetAllIsaOptionsDocument,
  CreateIsaInput,
} from 'libs/shared/state/gql/graphql';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const { data: isaOptions } = useQuery({
    queryKey: ['GetMyISA'],
    queryFn: () => {
      return gqlClient.request(GetAllIsaOptionsDocument);
    },
  });

  const handleSelect = (optionId: string) => {
    return gqlClient.request<CreateIsaInput>(CreateIsaDocument, {
      isaOptionId: 'asd',
      savings: 123,
    });
  };

  return (
    <StyledApp>
      <Welcome title="ISA" />
      {/*{isaOptions?.getAllIsaOptions.map((isaOpton) => {
        return (
          <Card
            title={isaOpton.name}
            footer={
              <Button
                onClick={() => {
                  handleSelect(isaOpton.id);
                }}
                buttonType="primary"
              >
                Select
              </Button>
            }
          >
            <Input label="lumpsum" type="number" />
          </Card>
        );
      })} */}
    </StyledApp>
  );
}

export default App;
