import React from 'react';

const AdditionalFeature = props => {
  console.log('Additional Feature Props', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button" 
        onClick={e => {
          e.preventDefault()
          props.buyItem(props.feature)
        }} >
      Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
