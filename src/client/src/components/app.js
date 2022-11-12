import React from 'react'
import Login from './login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'
import { ContactsProvider } from '../contexts/ContactsProvider'
import { ConversationProvider } from '../contexts/ConversationsProvider'

function App() {
  const [id, setId] = useLocalStorage('id')
  
  const dashboard = (
    <ContactsProvider>
      <ConversationProvider id={id}>
        <Dashboard id={id} />
      </ConversationProvider>
    </ContactsProvider>
  )

  return ( 
      id ? dashboard : <Login onIdSubmit={setId}/>
  )
}

export default App;

//j J
//export NODE_OPTIONS=--openssl-legacy-provider