import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
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
  padding: 8px;
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

  const router = useRouter();

  return (
    <Container>
      <ColCard>
        <h2 css={h2Style}>Checkout</h2>
        <Form>
          <Label htmlFor="firstname">First name</Label>
          <Input
            id="firstname"
            name="firstname"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
          <Label htmlFor="lastname">Last name</Label>
          <Input
            id="lastname"
            name="lastname"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.currentTarget.value)}
          />
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={city}
            onChange={(event) => setCity(event.currentTarget.value)}
          />
          <Label
            htmlFor="postcode"
            value={postcode}
            onChange={(event) => setPostcode(event.currentTarget.value)}
          >
            Postcode
          </Label>
          <Input id="postcode" name="postcode" />
          <Button onClick={() => router.push('/thanks')}>Submit</Button>
        </Form>
      </ColCard>
    </Container>
  );
}
