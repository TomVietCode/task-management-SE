import React from 'react';
import { Flex, Input, Typography } from 'antd';
const { Title } = Typography;

const App = () => {
  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const sharedProps = {
    onChange,
  };
  return (
    <Flex gap="middle" align="flex-start" vertical>
      <Title level={5}>With formatter (Upcase)</Title>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
      <Title level={5}>With Disabled</Title>
      <Input.OTP disabled {...sharedProps} />
      <Title level={5}>With Length (8)</Title>
      <Input.OTP length={8} {...sharedProps} />
      <Title level={5}>With variant</Title>
      <Input.OTP variant="filled" {...sharedProps} />
      <Title level={5}>With custom display character</Title>
      <Input.OTP mask="🔒" {...sharedProps} />
    </Flex>
  );
};
export default App;