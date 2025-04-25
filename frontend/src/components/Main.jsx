import React from 'react'
import '../styles/Main.css'

function Main() {
  return (
    <main>
      <section>
        <p>Hello zusammen,</p>
        <p>Aufgabe für die Gruppenarbeit:</p>
        <a href="https://github.com/suheib96/web-development-24-11" target="_blank" rel="noopener noreferrer" style={{color: 'rgb(255, 165, 0)', textShadow: '1px 1px 25px'}}>
          https://github.com/suheib96/web-development-24-11
        </a>
        <p>
          In meinem Repo findet ihr den Ordner <strong>Tiere-react-app</strong>. Darin gibt’s zwei Unterordner: <strong>backend</strong> und <strong>frontend</strong>.
        </p>
        <p>Im backend liegt:</p>
        <ul>
          <li>eine SQLite-Datenbank,</li>
          <li>eine <code>index.js</code> mit einer kleinen Express-App und mehreren Routen.</li>
        </ul>
        <p>Die verfügbaren Routen:</p>
        <ul>
          <li><code>GET /tiere</code> → zeigt alle Tiere an</li>
          <li><code>GET /tiere/:id</code> → zeigt ein einzelnes Tier anhand der ID</li>
          <li><code>POST /tiere</code> → fügt ein neues Tier hinzu</li>
          <li><code>PUT /tiere/:id</code> → bearbeitet ein Tier</li>
          <li><code>DELETE /tiere/:id</code> → löscht ein Tier</li>
        </ul>
        <p>Für <code>POST</code> und <code>PUT</code> braucht ihr folgenden JSON-Body:</p>
        <pre>
          <code style={{color: 'rgb(255, 166, 0)', textShadow: '1px 1px 25px'}}>
        {`        {
          "tierart": "Hund",
          "name": "Bello",
          "krankheit": "Husten",
          "geburtstag": "01.03.2024",
          "gewicht": 7.1
        }`}
          </code>
        </pre>
        <p>Aufgaben:</p>
        <ol>
          <li>
            <strong>Backend starten und testen:</strong>
            <ul>
              <li>Startet erstmal das Backend</li>
              <li>Nutzt Postman, um alle Routen einmal zu testen</li>
              <li>Wenn alles funktioniert, geht’s weiter:</li>
            </ul>
          </li>
          <li>
            <strong>Tiere-Liste im Frontend:</strong>
            <ul>
              <li>Holt euch alle Tiere vom Backend (<code>GET /tiere</code>)</li>
              <li>Zeigt sie im Frontend an – z.B. nur Tierart und Name</li>
            </ul>
          </li>
          <li>
            <strong>Detailseite bauen:</strong>
            <ul>
              <li>Wenn man auf ein Tier klickt, soll eine neue Seite geladen werden (<code>/tiere/:id</code>)</li>
              <li>Holt euch die Details vom Tier über die ID</li>
              <li>Dort soll man das Tier später auch bearbeiten oder löschen können (das kommt danach)</li>
            </ul>
          </li>
        </ol>
        <p>
          Wenn etwas unklar ist, meldet euch einfach – ich helfe gerne weiter 😊. Schaut euch auch gerne nochmal den Code der letzten Tage an, wenn unklar ist wie ihr starten sollt.
        </p>
        <p>Kein Stress, kein Wettbewerb – das ist einfach eine Übung, damit ihr euch sicherer fühlt und die Abläufe besser versteht.</p>
      </section>
    </main>
  )
}

export default Main