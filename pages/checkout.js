import styled from '@emotion/styled';
import { useState } from 'react';
import { Button } from '../components/Button';
import { ColCard, Container, h2Style } from '../styles';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 640px;
`;

const Label = styled.label`
  margin-bottom: 6px;
  font-family: inherit;
  font-weight: 400;
`;

const Input = styled.input`
  margin-bottom: 24px;
  height: 36px;
  min-width: 240px;
  font-family: inherit;
`;

export default function Checkout(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');

  return (
    <Container>
      <ColCard>
        <h2 css={h2Style}>Checkout</h2>
        <Form>
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" name="firstname" />
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" name="lastname" />
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" />
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" />
          <Label htmlFor="postcode">Postcode</Label>
          <Input id="postcode" name="postcode" />
          <Button>Submit</Button>
        </Form>
      </ColCard>
    </Container>
  );
}
