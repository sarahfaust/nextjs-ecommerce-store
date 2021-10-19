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
  const [email, setEmail] = useState('');
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
            data-cy="checkout-input-firstname"
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
          <Label htmlFor="lastname">Last name</Label>
          <Input
            id="lastname"
            name="lastname"
            value={lastName}
            data-cy="checkout-input-lastname"
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
          <Label htmlFor="email">E-Mail</Label>
          <Input
            id="email"
            name="email"
            value={email}
            data-cy="checkout-input-email"
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={address}
            data-cy="checkout-input-address"
            onChange={(event) => setAddress(event.currentTarget.value)}
          />
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={city}
            data-cy="checkout-input-city"
            onChange={(event) => setCity(event.currentTarget.value)}
          />
          <Label htmlFor="postcode">Postcode</Label>
          <Input
            id="postcode"
            name="postcode"
            value={postcode}
            data-cy="checkout-input-postcode"
            onChange={(event) => setPostcode(event.currentTarget.value)}
          />
          <Button
            onClick={(event) => {
              event.preventDefault();
              router.push('/thanks');
            }}
            dataCy="checkout-buy-button"
          >
            Buy
          </Button>
        </Form>
      </ColCard>
    </Container>
  );
}
