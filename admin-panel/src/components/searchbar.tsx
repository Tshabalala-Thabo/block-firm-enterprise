"use client"

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log('Searching for:', query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-1.5 pl-8 pr-3 text-sm text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-primary focus:ring-offset-2"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Search className="w-4 h-4 text-gray-400" />
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-gray-700 bg-gray-100 rounded-r-md hover:bg-brown-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-brown-primary focus:ring-offset-2"
        >
          Search
        </button>
      </div>
    </form>
  )
}