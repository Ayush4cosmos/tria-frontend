import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import ContactList from './components/ContactList'
import AddContactModal from './components/AddContactModal'
import ContactDetailModal from './components/ContactDetailModal'

export default function App() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [error, setError] = useState(null)
  const [selectedContact, setSelectedContact] = useState(null)


  const API_URL = 'https://mocki.io/v1/a927097d-93a7-4063-ad80-f01cd2c69d77'


  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)

    // network delay
    setTimeout(() => {
      fetch(API_URL)
        .then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`)
          return r.json()
        })
        .then((data) => {
          if (!mounted) return
          data.sort((a, b) => a.name.localeCompare(b.name))
          setContacts(data)
        })
        .catch((err) => {
          console.error('API fetch error:', err)
          setError('Failed to fetch contacts. Please try again later.')
        })
        .finally(() => mounted && setLoading(false))
    }, 500)

    return () => { mounted = false }
  }, [])

  function handleAdd(newContact) {
    const nextId = contacts.length ? Math.max(...contacts.map(c => c.id)) + 1 : 1
    const contact = { id: nextId, ...newContact }
    setContacts(prev => [...prev, contact].sort((a, b) => a.name.localeCompare(b.name)))
    setShowAdd(false)
  }
  function handleUpdate(updatedContact) {
  setContacts(prev =>
    prev.map(c => (c.id === updatedContact.id ? updatedContact : c))
  )
  setSelectedContact(updatedContact)
}


    const q = query.trim().toLowerCase()
    const filtered = contacts.filter(c => {
    return (
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q)
    )
    })


  return (
    <div className="app">
    <main className="container">
        <header className="header sticky">
        <h1>Contacts</h1>
        <button className="add-btn" onClick={() => setShowAdd(true)}>+ Add</button>
        </header>

        <SearchBar value={query} onChange={setQuery} placeholder="Search by name..." />
        {error && <div className="error">{error}</div>}

        <div className="contact-box">
        <ContactList contacts={filtered} loading={loading} query={query} onSelectContact={setSelectedContact} />
        </div>

        {showAdd && <AddContactModal onClose={() => setShowAdd(false)} onAdd={handleAdd} />}

        {selectedContact && (
            <ContactDetailModal
              contact={selectedContact}
              onClose={() => setSelectedContact(null)}
              onUpdate={handleUpdate}
            />
        )}
    </main>
    </div>

  )
}
