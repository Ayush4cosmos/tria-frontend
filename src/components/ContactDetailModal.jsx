import React from 'react'

export default function ContactDetailModal({ contact, onClose }) {
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
          <h2 className="contact-name">{contact.name}</h2>
          <div className="detail-item">
            <strong>Email:</strong> {contact.email || '—'}
          </div>
          <div className="detail-item">
            <strong>Phone:</strong> {contact.phone || '—'}
          </div>
        </div>
      </div>
    </div>
  )
}
