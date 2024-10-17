import React, { useState } from 'react'
import TextPoppins from '../assets/polices/TextPoppins'
import TextField from '../components/form/TextField'

function Home() {
  const [email, setEmail] = useState('');
  return (
    <div>
      <TextPoppins color="text-blue-500" fontSize="text-xl" fontWeight="font-bold">
        Ceci est un texte avec Poppins !
      </TextPoppins>

      <TextField
        id="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Entrez votre email"
        color="text-gray-700"
        fontSize="text-lg"
        fontWeight="font-medium"
        required
      />

    </div>
  )
}

export default Home