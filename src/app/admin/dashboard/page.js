'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Status badge component
const StatusBadge = ({ status }) => {
  const statusColors = {
    NEW: 'bg-blue-100 text-blue-800',
    CONTACTED: 'bg-yellow-100 text-yellow-800',
    INTERVIEW: 'bg-purple-100 text-purple-800',
    ACCEPTED: 'bg-green-100 text-green-800',
    REJECTED: 'bg-red-100 text-red-800',
    INACTIVE: 'bg-gray-100 text-gray-800'
  }

  return (
    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${statusColors[status] || 'bg-gray-100'}`}>
      {status}
    </span>
  )
}

export default function AdminDashboard() {
  const [candidates, setCandidates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [contactForm, setContactForm] = useState({ subject: '', message: '' })
  const [showContactModal, setShowContactModal] = useState(false)
  const router = useRouter()

  // Check authentication on load
  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (!token) {
      router.push('/admin/login')
    } else {
      fetchCandidates()
    }
  }, [])

  // Fetch candidates from the backend
  const fetchCandidates = async (status = 'all') => {
    setLoading(true)
    const token = localStorage.getItem('token')
    
    try {
      const endpoint = status === 'all' 
        ? '/api/admin/candidates'
        : `/api/admin/candidates/status/${status}`
        
      const response = await fetch(`${process.env.BACKEND_API_URL || 'http://localhost:8080'}${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('token')
          router.push('/admin/login')
          return
        }
        throw new Error('Failed to fetch candidates')
      }

      const data = await response.json()
      setCandidates(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Handle status filter change
  const handleStatusFilterChange = (e) => {
    const status = e.target.value
    setStatusFilter(status)
    fetchCandidates(status)
  }

  // Update candidate status
  const updateCandidateStatus = async (id, status) => {
    const token = localStorage.getItem('token')
    
    try {
      const response = await fetch(`${process.env.BACKEND_API_URL || 'http://localhost:8080'}/api/admin/candidates/${id}/status?status=${status}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Failed to update candidate status')
      }

      // Refresh the candidates list
      fetchCandidates(statusFilter)
    } catch (err) {
      setError(err.message)
    }
  }

  // Update candidate notes
  const updateCandidateNotes = async (id, notes) => {
    const token = localStorage.getItem('token')
    
    try {
      const response = await fetch(`${process.env.BACKEND_API_URL || 'http://localhost:8080'}/api/admin/candidates/${id}/notes`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ notes })
      })

      if (!response.ok) {
        throw new Error('Failed to update candidate notes')
      }

      // Refresh the candidates list
      fetchCandidates(statusFilter)
    } catch (err) {
      setError(err.message)
    }
  }

  // Open contact form modal
  const openContactModal = (candidate) => {
    setSelectedCandidate(candidate)
    setContactForm({
      subject: `Prague Fleet - Information about your application`,
      message: `Hello ${candidate.name},\n\nThank you for submitting your application to Prague Fleet.\n\n`
    })
    setShowContactModal(true)
  }

  // Send email to candidate
  const contactCandidate = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    
    try {
      const response = await fetch(`${process.env.BACKEND_API_URL || 'http://localhost:8080'}/api/admin/candidates/${selectedCandidate.id}/contact`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subject: contactForm.subject,
          message: contactForm.message
        })
      })

      if (!response.ok) {
        throw new Error('Failed to contact candidate')
      }

      // Close modal and refresh candidates
      setShowContactModal(false)
      fetchCandidates(statusFilter)
    } catch (err) {
      setError(err.message)
    }
  }

  // Handle contact form changes
  const handleContactFormChange = (e) => {
    const { name, value } = e.target
    setContactForm(prev => ({ ...prev, [name]: value }))
  }

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Filter controls */}
        <div className="mb-6 bg-white shadow overflow-hidden sm:rounded-lg p-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900 mb-4 md:mb-0">
              Employee Candidates
            </h2>
            
            <div className="flex items-center">
              <label htmlFor="status-filter" className="mr-2 text-sm font-medium text-gray-700">
                Filter by status:
              </label>
              <select
                id="status-filter"
                value={statusFilter}
                onChange={handleStatusFilterChange}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="all">All Candidates</option>
                <option value="NEW">New</option>
                <option value="CONTACTED">Contacted</option>
                <option value="INTERVIEW">Interview</option>
                <option value="ACCEPTED">Accepted</option>
                <option value="REJECTED">Rejected</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Error display */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Candidates table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading candidates...</div>
          ) : candidates.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No candidates found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Candidate
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Application Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Driver Info
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {candidates.map(candidate => (
                    <tr key={candidate.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                          <div className="text-sm text-gray-500">
                            <a href={`mailto:${candidate.email}`} className="text-indigo-600 hover:text-indigo-900">
                              {candidate.email}
                            </a>
                          </div>
                          {candidate.phoneNumber && (
                            <div className="text-sm text-gray-500">
                              <a href={`tel:${candidate.phoneNumber}`} className="text-indigo-600 hover:text-indigo-900">
                                {candidate.phoneNumber}
                              </a>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(candidate.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={candidate.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>Gender: {candidate.gender || 'N/A'}</div>
                        <div>EU License: {candidate.euDriverLicense ? 'Yes' : 'No'}</div>
                        <div>
                          Languages: {candidate.languages?.join(', ') || 'N/A'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {candidate.lastContactedAt ? (
                          <div>
                            <div>{formatDate(candidate.lastContactedAt)}</div>
                            <div>Count: {candidate.contactedCount}</div>
                          </div>
                        ) : (
                          'Never contacted'
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => openContactModal(candidate)}
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          Contact
                        </button>
                        <select
                          value={candidate.status}
                          onChange={(e) => updateCandidateStatus(candidate.id, e.target.value)}
                          className="mt-1 text-sm rounded-md border-gray-300 py-1 px-2"
                        >
                          <option value="NEW">New</option>
                          <option value="CONTACTED">Contacted</option>
                          <option value="INTERVIEW">Interview</option>
                          <option value="ACCEPTED">Accepted</option>
                          <option value="REJECTED">Rejected</option>
                          <option value="INACTIVE">Inactive</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Contact modal */}
      {showContactModal && selectedCandidate && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={contactCandidate}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Contact {selectedCandidate.name}
                      </h3>
                      <div className="mt-2">
                        <div className="mb-4">
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                            Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            value={contactForm.subject}
                            onChange={handleContactFormChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={contactForm.message}
                            onChange={handleContactFormChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Send Email
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowContactModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 