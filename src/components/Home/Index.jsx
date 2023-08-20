import React from 'react';
import '../css/Home.css'
import Consultation from './Consultation';
import Services from './Services.jsx';
import Choose from './Choose';
import BlockChain from './BlockChain';
import Process from './Process';
import Technologies from './Technologies';
import WebApps from './WebApps';
import MobileApps from './MobileApps';
import Articles from './Articles';
import Industry from './Industry';
import Clients from './Clients';

const Index = () => {
  return (

    <>
   
      <main>
        <Consultation />
        <Services />
        <Choose />
        <BlockChain />
        <Process />
        <Technologies />
        <WebApps />
        <MobileApps />
        <Articles />
        <Industry />

        <Clients />

      </main>
      </>
  )
}

export default Index