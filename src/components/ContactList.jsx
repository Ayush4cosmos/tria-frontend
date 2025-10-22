import React from 'react'
import ContactCard from './ContactCard'

export default function ContactList({ contacts, loading, query, onSelectContact }) {
  if (loading) return <div className="state">Loading contacts…</div>

  if (!contacts.length)
    return (
      <div className="state">
        {query ? `No results for “${query}”` : 'No contacts yet. Click “Add” to create one.'}
      </div>
    )

  return (
    <ul className="contact-grid">
      {contacts.map(c => (
        <li key={c.id} onClick={() => onSelectContact(c)} style={{ cursor: 'pointer' }}>
          <ContactCard contact={c} query={query} />
        </li>
      ))}
    </ul>
  )
}
