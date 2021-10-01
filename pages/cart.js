import { css } from '@emotion/react';
import Layout from '../components/Layout';

export default function Cart() {
  return (
    <Layout>
      <div
        css={{
          backgroundColor: 'hotpink',
          '&:hover': {
            color: 'lightgreen',
          },
        }}
      >
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
      <div
        css={css`
          background-color: hotpink;
          &:hover {
            color: deeppink;
          }
        `}
      >
        This has a hotpink background.
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
    </Layout>
  );
}
