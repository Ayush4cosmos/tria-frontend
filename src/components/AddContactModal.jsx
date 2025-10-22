import React, { useState } from 'react'

export default function AddContactModal({ onClose, onAdd }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  

  function handleSubmit(e) {
  e.preventDefault()
  if (!name.trim()) return alert('Name is required')

  const colors = [
    '#f97316', '#06b6d4', '#a78bfa', '#34d399', '#f59e0b',
    '#ef4444', '#3b82f6', '#ec4899', '#8b5cf6', '#14b8a6',
    '#eab308', '#22c55e', '#2563eb', '#f43f5e', '#84cc16',
    '#06b6d4', '#d946ef', '#f97316', '#34d399'
  ]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  onAdd({
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    avatarColor: randomColor
  })
}


  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e)=>e.stopPropagation()}>
        <header className="modal-header">
          <h2>Add Contact</h2>
          <button className="close" onClick={onClose} aria-label="Close">×</button>
        </header>
        <form onSubmit={handleSubmit} className="modal-body">
          <label>
            Name
            <input value={name} onChange={e=>setName(e.target.value)} required />
          </label>
          <label>
            Email
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" />
          </label>
          <label>
            Phone
            <input value={phone} onChange={e=>setPhone(e.target.value)} />
          </label>
          
          <div className="modal-actions">
            <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}
