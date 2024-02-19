import React from 'react';

const PronunciationPopup = ({ word, pronunciation, meaning, audioUrl, onClose }) => {
  return (
    <div className="pronunciation-popup">
      <p><strong>{word}</strong></p>
      <p>{pronunciation}</p>
      <p>{meaning}</p>
      <audio controls src={audioUrl}></audio>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PronunciationPopup;
