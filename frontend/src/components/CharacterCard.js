import React from 'react';
import Likes from '../containers/Likes.js'

const CharacterCard = ({ character, deleteCharacter }) =>

  <div className='item-a'>
    <fieldset className="card-fieldset">
      <button
        type="character-button"
        onClick={() => deleteCharacter(character.id)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className='character-info'>
        <fieldset className='character-info'>
          <legend className='card-legend'><b>CHARACTER information:</b></legend>
          <div className='basic-info-container'>
          <div className='basic-info'>
            
            <b>Setting:</b> {character.setting}<br />
            <b>Name</b> {character.firstname} {character.lastname}< br />
            <b>Gender:</b> {character.gender}<br />
            <b>Age:</b> {character.age}<br />
            <b>Region:</b> {character.region}<br />
          </div>
            {/* <b className='center-like'>LIKES<Likes/></b> */}
          </div>
        </fieldset>
        <fieldset className='personality-traits'>
          <legend className='card-legend'><b>Personality Traits:</b></legend>
          <b>Trait 1:</b> {character.trait1}<br />
          <b>Trait 2:</b> {character.trait2}<br />
        </fieldset>
        <fieldset className='story-elements'>
          <legend className='card-legend'><b>Story ELEMENTS:</b></legend>
          <b>Background:</b> {character.background}<br />
          <b>Story Hook:</b> {character.storyhook}<br />
        </fieldset>
      </div>
    </fieldset>
  </div>


export default CharacterCard;