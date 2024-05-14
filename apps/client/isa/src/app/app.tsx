import {
  createIsa,
  deleteMyIsa,
  getAllIsaOptions,
  getMyIsa,
  useGlobalSync,
} from '@isa-exercise/state';
import { Button, Card, Input, Welcome } from '@isa-exercise/ui';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [amount, setAmount] = useState<number>(0);

  const {
    store: { auth, myPension, isaOptions, myIsa },
  } = useGlobalSync();

  useEffect(() => {
    getAllIsaOptions();
    getMyIsa();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAmount(parseFloat(e.target.value));

  const handleDelete = () => deleteMyIsa();

  const handleSave = (optionId: string) => {
    createIsa({ savings: amount, isaOptionId: optionId });
  };

  if (myIsa) {
    return (
      <StyledApp>
        <Welcome title="ISA" />
        <Card
          title={'Your ISA details'}
          footer={
            <Button buttonType="primary" onClick={handleDelete}>
              Remove
            </Button>
          }
        >
          <h3>Savings : {myIsa.savings}</h3>
        </Card>
      </StyledApp>
    );
  }

  return (
    <StyledApp>
      <Welcome title="ISA" />
      <div style={{ display: 'flex' }}>
        <div>
          <Input
            label="Total Amount"
            name="amount"
            type="number"
            onChange={handleChange}
          />
        </div>

        {(isaOptions || []).map((isaOption) => {
          return (
            <Card
              title={isaOption.name}
              footer={
                <Button
                  onClick={() => {
                    handleSave(isaOption.id);
                  }}
                  buttonType="primary"
                >
                  Save
                </Button>
              }
            ></Card>
          );
        })}
      </div>
    </StyledApp>
  );
}

export default App;
