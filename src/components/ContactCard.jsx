import React from 'react'

// Utility: returns initials (like before)
function initials(name) {
  return name.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase()
}

// Utility: highlight matched part
function highlight(text, query) {
  if (!query) return text
  const q = query.trim()
  const regex = new RegExp(`(${q})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i}>{part}</mark> : part
  )
}

export default function ContactCard({ contact, query }) {
  return (
    <article className="card">
      <div className="avatar" style={{ background: contact.avatarColor || '#ddd' }}>
        {initials(contact.name)}
      </div>
      <div className="card-body">
        <h3 className="name">{highlight(contact.name, query)}</h3>
        <div className="meta">{highlight(contact.email, query)}</div>
        <div className="meta">{highlight(contact.phone, query)}</div>
      </div>
    </article>
  )
}
