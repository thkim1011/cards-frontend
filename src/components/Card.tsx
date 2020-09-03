import React from 'react';

import styled from 'styled-components';

import CLUB1 from '../assets/CLUB-1.svg';
import CLUB2 from '../assets/CLUB-2.svg';
import CLUB3 from '../assets/CLUB-3.svg';
import CLUB4 from '../assets/CLUB-4.svg';
import CLUB5 from '../assets/CLUB-5.svg';
import CLUB6 from '../assets/CLUB-6.svg';
import CLUB7 from '../assets/CLUB-7.svg';
import CLUB8 from '../assets/CLUB-8.svg';
import CLUB9 from '../assets/CLUB-9.svg';
import CLUB10 from '../assets/CLUB-10.svg';
import CLUB11 from '../assets/CLUB-11-JACK.svg';
import CLUB12 from '../assets/CLUB-12-QUEEN.svg';
import CLUB13 from '../assets/CLUB-13-KING.svg';
import DIAMOND1 from '../assets/DIAMOND-1.svg';
import DIAMOND2 from '../assets/DIAMOND-2.svg';
import DIAMOND3 from '../assets/DIAMOND-3.svg';
import DIAMOND4 from '../assets/DIAMOND-4.svg';
import DIAMOND5 from '../assets/DIAMOND-5.svg';
import DIAMOND6 from '../assets/DIAMOND-6.svg';
import DIAMOND7 from '../assets/DIAMOND-7.svg';
import DIAMOND8 from '../assets/DIAMOND-8.svg';
import DIAMOND9 from '../assets/DIAMOND-9.svg';
import DIAMOND10 from '../assets/DIAMOND-10.svg';
import DIAMOND11 from '../assets/DIAMOND-11-JACK.svg';
import DIAMOND12 from '../assets/DIAMOND-12-QUEEN.svg';
import DIAMOND13 from '../assets/DIAMOND-13-KING.svg';
import HEART1 from '../assets/HEART-1.svg';
import HEART2 from '../assets/HEART-2.svg';
import HEART3 from '../assets/HEART-3.svg';
import HEART4 from '../assets/HEART-4.svg';
import HEART5 from '../assets/HEART-5.svg';
import HEART6 from '../assets/HEART-6.svg';
import HEART7 from '../assets/HEART-7.svg';
import HEART8 from '../assets/HEART-8.svg';
import HEART9 from '../assets/HEART-9.svg';
import HEART10 from '../assets/HEART-10.svg';
import HEART11 from '../assets/HEART-11-JACK.svg';
import HEART12 from '../assets/HEART-12-QUEEN.svg';
import HEART13 from '../assets/HEART-13-KING.svg';
import SPADE1 from '../assets/SPADE-1.svg';
import SPADE2 from '../assets/SPADE-2.svg';
import SPADE3 from '../assets/SPADE-3.svg';
import SPADE4 from '../assets/SPADE-4.svg';
import SPADE5 from '../assets/SPADE-5.svg';
import SPADE6 from '../assets/SPADE-6.svg';
import SPADE7 from '../assets/SPADE-7.svg';
import SPADE8 from '../assets/SPADE-8.svg';
import SPADE9 from '../assets/SPADE-9.svg';
import SPADE10 from '../assets/SPADE-10.svg';
import SPADE11 from '../assets/SPADE-11-JACK.svg';
import SPADE12 from '../assets/SPADE-12-QUEEN.svg';
import SPADE13 from '../assets/SPADE-13-KING.svg';

const CARD_ASSETS = [
  CLUB1,
  CLUB2,
  CLUB3,
  CLUB4,
  CLUB5,
  CLUB6,
  CLUB7,
  CLUB8,
  CLUB9,
  CLUB10,
  CLUB11,
  CLUB12,
  CLUB13,
  DIAMOND1,
  DIAMOND2,
  DIAMOND3,
  DIAMOND4,
  DIAMOND5,
  DIAMOND6,
  DIAMOND7,
  DIAMOND8,
  DIAMOND9,
  DIAMOND10,
  DIAMOND11,
  DIAMOND12,
  DIAMOND13,
  HEART1,
  HEART2,
  HEART3,
  HEART4,
  HEART5,
  HEART6,
  HEART7,
  HEART8,
  HEART9,
  HEART10,
  HEART11,
  HEART12,
  HEART13,
  SPADE1,
  SPADE2,
  SPADE3,
  SPADE4,
  SPADE5,
  SPADE6,
  SPADE7,
  SPADE8,
  SPADE9,
  SPADE10,
  SPADE11,
  SPADE12,
  SPADE13,
];

export interface CardProps {
  cardType: number;
};

const Card: React.FunctionComponent<CardProps> = (props: CardProps) => {
  return <img src={CARD_ASSETS[props.cardType]} style={{ borderRadius: '10px', borderColor: 'black', borderWidth: '2px', borderStyle: 'solid', width: '150px' }}></img>
};

export default Card;