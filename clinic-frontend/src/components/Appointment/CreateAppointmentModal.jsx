import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ErrorBox from '../Common/ErrorBox';
import FormInput from '../Common/FormInput';

const CreateAppointmentModal = ({ clients, onAppointmentCreated }) => {
  const [errors, setErrors] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    time: '',
    client_id: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const resetForm = () => {
    setForm({
      time: '',
      client_id: '',
      name: '',
      email: '',
      phone: '',
    });
    setErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      appointment: {
        time: form.time,
        ...(form.client_id
          ? { client_id: form.client_id }
          : {
              client_attributes: {
                name: form.name,
                email: form.email,
                phone: form.phone,
              },
            }),
      },
    };

    try {
      const res = await axios.post('http://localhost:3000/api/v1/appointments', data, {
        headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY || "8db7b26a4c4f479a9cba9465d9ec8d7e"},
      });
      const { appointment, client } = res.data;
      onAppointmentCreated(appointment, client); 
      resetForm();
      setShow(false);
    } catch (err) {
      console.error(err);
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        alert('Failed to create appointment');
      }
    }
  };

  return (
    <>
      <button
        onClick={() => {
          resetForm();
          setShow(true);
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faPlus} />
        Create New Appointment
      </button>

      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-xl font-bold">New Appointment</h2>

            {errors.length > 0 && <ErrorBox errors={errors} />}

            <form onSubmit={handleSubmit} className="space-y-3">
              <FormInput
                type="datetime-local"
                name="time"
                label="Appointment Time"
                value={form.time}
                onChange={handleChange}
                min={new Date().toISOString().slice(0, 16)} 
                required
              />

              <select
                name="client_id"
                value={form.client_id}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">-- Select Existing Client --</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>

              {!form.client_id && (
                <>
                  <FormInput
                    type="text"
                    name="name"
                    label="Client Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    type="email"
                    name="email"
                    label="Client Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    type="text"
                    name="phone"
                    label="Client Phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </>
              )}

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAppointmentModal;
