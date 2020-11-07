import dynamic from 'next/dynamic';
import React from 'react';

import Card from '../components/card/Card';
import Header from '../components/Header';
import InputForm from '../components/InputForm';

const MyMap = dynamic(() => import('../components/Map'), { ssr: false });

const AppHome: React.FC = () => (
  <main>
    <Header form={<InputForm />} card={<Card />} />
    <MyMap coordinates={[51.505, -0.09]} address="Brooklyn, NY, 10001" />
  </main>
);

export default AppHome;
