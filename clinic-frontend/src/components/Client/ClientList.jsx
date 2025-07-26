import React from 'react';

const ClientList = ({ clients }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Clients</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {clients.map(client => (
        <div
          key={client.id}
          className="bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-bold text-gray-800">{client.name}</h3>
          <p className="text-sm text-gray-600 mt-1">
            <span className="block"><strong>Email:</strong> {client.email}</span>
            <span className="block"><strong>Phone:</strong> {client.phone}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default ClientList;
