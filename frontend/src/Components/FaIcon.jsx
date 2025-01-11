import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const FaIcon = ({item}) => {
    console.log(item.image_url);
  return (
    <FontAwesomeIcon icon={faCoffee} />
  )
}

export default FaIcon;