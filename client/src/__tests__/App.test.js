import React from 'react';
import { shallow } from '../setupTests';
import App from '../App';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />,
    );
  });

  it('Renders non-empty component without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
