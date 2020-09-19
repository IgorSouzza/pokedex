import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';

test('renders learn react link', async () => {
  await render(<App />);
  expect(document.title).toEqual("Poke List");
});
