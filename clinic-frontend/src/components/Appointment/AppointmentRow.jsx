import React from 'react';
import { formatAppointmentTime } from '../../utils/formatDate';

const AppointmentRow = ({ appointment, client }) => (
  <tr className="hover:bg-gray-50">
    <td className="px-6 py-4 font-medium text-gray-900">{appointment.id}</td>
    <td className="px-6 py-4">{client?.name || `Client #${appointment.client_id}`}</td>
    <td className="px-6 py-4">{client?.email || '-'}</td>
    <td className="px-6 py-4 text-gray-500">
      {formatAppointmentTime(appointment.time)}
    </td>
  </tr>
);

export default AppointmentRow;
