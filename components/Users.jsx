"use client";
import { useEffect } from 'react'

function Users() {
  useEffect(() => {
    alert('loaded')
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            👥 Users
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card de ejemplo - puedes repetir o hacer un map */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">U</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Usuario 1</h3>
                  <p className="text-sm opacity-90">user1@email.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">U</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Usuario 2</h3>
                  <p className="text-sm opacity-90">user2@email.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">U</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Usuario 3</h3>
                  <p className="text-sm opacity-90">user3@email.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Agregar Usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users