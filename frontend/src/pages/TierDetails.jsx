import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/TierDetails.css';

function TierDetails() {
  const { id } = useParams();
  const [tier, setTier] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5005/tiere/${id}`) // Backend-URL anpassen
      .then((response) => response.json())
      .then((data) => setTier(data))
      .catch((error) => console.error('Fehler beim Laden der Tierdetails:', error));
  }, [id]);

  if (!tier) {
    return <p className="loading">Lade Tierdetails...</p>;
  }

  return (
    <main>
      <button className="goBackButton" onClick={() => window.history.back()}>⬅️ Zurück</button>
      <h2 className="tierName">Details zu {tier.name}</h2>
      <table className="tierTable">
        <tbody>
          <tr>
            <td className='property'>Tierart ......................</td>
            <td className='value'>{tier.tierart}</td>
            <td className='placeholder'></td>
          </tr>
          <tr>
            <td className='property'>Krankheit .................</td>
            <td className='value'>{tier.krankheit}</td>
            <td className='placeholder'></td>
            <td><button className='editButton'>✏️</button></td>
          </tr>
          <tr>
            <td className='property'>Geburtstag ..............</td>
            <td className='value'>{tier.geburtstag}</td>
            <td className='placeholder'></td>
          </tr>
          <tr>
            <td className='property'>Gewicht ...................</td>
            <td className='value'>{tier.gewicht} kg</td>
            <td className='placeholder'></td>
            <td><button className='editButton'>✏️</button></td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default TierDetails;