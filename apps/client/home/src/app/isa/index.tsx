import * as React from 'react';
import { Button, Nav, Card, Input, Layout } from '@isa-exercise/ui';
import { gqlClient } from '@isa-exercise/state';
import { GetAllIsaOptionsDocument } from 'libs/shared/state/gql/graphql';

export function Isa() {
  const [isaOptions, setIsaOptions] = React.useState<any[]>();
  const [amount, setAmount] = React.useState<number>(0);

  function handleSelect(id: any) {
    throw new Error('Function not implemented.');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAmount(parseFloat(e.target.value));

  React.useEffect(() => {
    gqlClient.request(GetAllIsaOptionsDocument).then((res) => {
      console.log('getAllIsaOptions', res);
      setIsaOptions(res.getAllIsaOptions);
    });
  }, []);

  return (
    <Layout>
      <Input
        label="Investment Amount"
        name="amount"
        type="number"
        onChange={handleChange}
      />
        {isaOptions?.map((isaOpton: any) => {
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
                  Save
                </Button>
              }
            ></Card>
          );
        })}
    </Layout>
  );
}

export default Isa;
