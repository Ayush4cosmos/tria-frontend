import React from 'react'

export default function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  return (
    <div className="searchbar">
      <input
        aria-label="Search contacts by name"
        type="text"
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && <button className="clear" onClick={()=>onChange('')} aria-label="Clear search">×</button>}
    </div>
  )
}
