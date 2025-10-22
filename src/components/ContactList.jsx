import React from 'react'
import ContactCard from './ContactCard'

export default function ContactList({ contacts, loading, query }) {
  if (loading) {
    return <div className="state">Loading contacts…</div>
  }

  if (!contacts.length) {
    if (query) {
      return <div className="state">No results for “{query}”. Try a different name.</div>
    } else {
      return <div className="state">No contacts yet. Click “Add” to create one.</div>
    }
  }

  return (
    <ul className="contact-grid">
      {contacts.map(c => (
        <li key={c.id}><ContactCard contact={c} query={query} /></li>
      ))}
    </ul>
  )

  
}
