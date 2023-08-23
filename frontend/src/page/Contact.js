import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message:</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded font-medium hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact