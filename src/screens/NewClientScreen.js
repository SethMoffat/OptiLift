import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './NewClientScreen.css';

function NewClientScreen() {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!clientName || !clientEmail) {
      setError('All fields are required');
      return;
    }

    const db = getFirestore();
    try {
      await addDoc(collection(db, 'clients'), {
        name: clientName,
        email: clientEmail,
      });

      setClientName('');
      setClientEmail('');
      setError('');
    } catch (err) {
      setError('Failed to add client');
    }
  };

  return (
    <div className="new-client-form">
      <form onSubmit={handleSubmit}>
        <label>
          Company Name: 
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
          />
        </label>
        {error && <p>{error}</p>}
        <input type="submit" value="Submit" disabled={!clientName || !clientEmail} />
      </form>
    </div>
  );
}

export default NewClientScreen;