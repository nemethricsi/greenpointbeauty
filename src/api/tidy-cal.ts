import type { BookingType } from '@/types/tidy-cal';

export const getBookingTypes = async (): Promise<{ data: BookingType[] }> => {
  const res = await fetch('https://tidycal.com/api/booking-types', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TIDY_CAL_API_KEY}`,
    },
  });
  const json = res.json();
  return json;
};
