import React from 'react';
import './Player.css';
import { useStateValue } from '../../context/context';

import Sidebar from '../../components/Sidebar/Sidebar';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';

const Player = ({ spotify }) => {
  const [{ user, token }, dispatch] = useStateValue();

  return (
    <div className="player">

      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
      
    </div>
  )
}

export default Player
