import dayjs from 'dayjs';

export const formatAppointmentTime = (time) => {
  return dayjs(time).format('YYYY-MM-DD HH:mm');
};
