import React, { useState } from 'react'

export default function ContactDetailModal({ contact, onClose, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [edited, setEdited] = useState({ ...contact })

  function handleChange(e) {
    const { name, value } = e.target
    setEdited(prev => ({ ...prev, [name]: value }))
  }

  function handleSave() {
    onUpdate(edited)
    setIsEditing(false)
  }

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="modal contact-detail-modal"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="contact-detail-content">
          <div
            className="avatar large"
            style={{ background: contact.avatarColor || '#ddd' }}
          >
            {contact.name
              .split(' ')
              .map(s => s[0])
              .slice(0, 2)
              .join('')
              .toUpperCase()}
          </div>

          {isEditing ? (
            <>
              <input
                name="name"
                value={edited.name}
                onChange={handleChange}
                className="edit-input"
              />
              <input
                name="email"
                value={edited.email}
                onChange={handleChange}
                className="edit-input"
              />
              <input
                name="phone"
                value={edited.phone}
                onChange={handleChange}
                className="edit-input"
              />

              <div className="modal-actions">
                <button className="btn ghost" onClick={() => setIsEditing(false)}>Cancel</button>
                <button className="btn primary" onClick={handleSave}>Save</button>
              </div>
            </>
          ) : (
            <>
              <h2 className="contact-name">{contact.name}</h2>
              <div className="detail-item">
                <strong>Email:</strong> {contact.email || '—'}
              </div>
              <div className="detail-item">
                <strong>Phone:</strong> {contact.phone || '—'}
              </div>

              <div className="modal-actions">
                <button className="btn primary" onClick={() => setIsEditing(true)}>Edit</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
