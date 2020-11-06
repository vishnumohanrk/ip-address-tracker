import React from 'react';

import Card from '../components/card/Card';
import Header from '../components/Header';
import InputForm from '../components/InputForm';

const AppHome: React.FC = () => (
  <>
    <Header form={<InputForm />} card={<Card />} />
  </>
);

export default AppHome;
