import React, { useEffect, useState } from 'react';
import api from '../../api';
import AppointmentList from '../Appointment/AppointmentList';
import ClientList from '../Client/ClientList';
import CreateAppointmentModal from '../Appointment/CreateAppointmentModal';



const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [clients, setClients] = useState([]);
  const handleAppointmentCreated = (appointment, client) => {
  setAppointments(prev => [...prev, { ...appointment, client }]);
    setClients(prev => {
      if (prev.some(c => c.id === client.id)) return prev;
      return [...prev, client];
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clientsRes, appointmentsRes] = await Promise.all([
          api.get('/clients'),
          api.get('/appointments')
        ]);
        setClients(clientsRes.data);
        setAppointments(appointmentsRes.data);
      } catch (error) {
        console.error('API error:', error);
        alert('Failed to fetch data from server');
      }
    };

    fetchData();
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Clinic Dashboard</h1>
          <CreateAppointmentModal
            clients={clients}
            onAppointmentCreated={handleAppointmentCreated}
          />
        </div>

        <ClientList clients={clients} />
        <AppointmentList appointments={appointments} clients={clients} />
      </div>
    </div>
  );
};

export default Dashboard;
