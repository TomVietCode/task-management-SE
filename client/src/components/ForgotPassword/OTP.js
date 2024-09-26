import React from 'react';
import { Flex, Input, Typography } from 'antd';
const { Title } = Typography;

const OTPform = () => {
  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const sharedProps = {
    onChange,
  };
  return (
    <Flex gap="middle" align="flex-start" vertical>
      <Title level={5}>Enter your OTP</Title>
      <Input.OTP length={6} {...sharedProps} />
    </Flex>
  );
};
export default OTPform;