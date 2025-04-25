import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TierDetails.css';

function Tiere() {
    const [tiere, setTiere] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5005/tiere') // Backend-URL anpassen
            .then((response) => response.json())
            .then((data) => setTiere(data))
            .catch((error) => console.error('Fehler beim Laden der Tiere:', error));
    }, []);

    return (
        <main>
            <h2>Tiere</h2>
            <table>
                <tbody>
                    {tiere.map((tier) => (
                        <tr key={tier.id}>
                            <td className='property'>{tier.name}</td>
                            <td className='placeholder'></td>
                            <td className='value'>{tier.tierart}</td>
                            <td></td>
                            <td><Link to={`/tiere/${tier.id}`} style={{color: 'rgb(255, 165, 0)'}}>Details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default Tiere;