import React from 'react';
import AppointmentRow from './AppointmentRow';

const AppointmentList = ({ appointments, clients }) => {
  const sortedAppointments = [...appointments].sort(
    (a, b) => new Date(a.time) - new Date(b.time)
  );
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-left text-gray-600 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Client</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Time</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {sortedAppointments.map(appt => (
              <AppointmentRow
                key={appt.id}
                appointment={appt}
                client={appt.client || clients.find(c => c.id === appt.client_id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;
