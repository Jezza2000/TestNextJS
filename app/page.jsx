'use client';
import { useState } from 'react';
import Hero from '@/components/Hero';
import FlightSearch from '@/components/FlightSearch';
import FlightCard from '@/components/FlightCard';
import BookingForm from '@/components/BookingForm';
import SuccessBanner from '@/components/SuccessBanner';

export default function HomePage() {
  const [flights,        setFlights]        = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [booking,        setBooking]        = useState(null);
  const [searched,       setSearched]       = useState(false);

  function handleResults(results) {
    setFlights(results);
    setSelectedFlight(null);
    setBooking(null);
    setSearched(true);
  }

  function handleSelect(flight) {
    setSelectedFlight(flight);
    setBooking(null);
  }

  function handleSuccess(bookingResult) {
    setBooking(bookingResult);
    setSelectedFlight(null);
  }

  return (
    <div className="page">
      <Hero />
      <div className="body">
        <FlightSearch onResults={handleResults} />

        {searched && flights.length === 0 && (
          <p className="no-results visible">No flights found for this route and date range.</p>
        )}

        {flights.length > 0 && (
          <div className="results-panel visible">
            <div className="section-label" style={{ marginTop: '1.25rem' }}>
              Available Flights
            </div>
            {flights.map(f => (
              <FlightCard
                key={f._id}
                flight={f}
                selected={selectedFlight?._id === f._id}
                onSelect={handleSelect}
              />
            ))}
          </div>
        )}

        {selectedFlight && (
          <BookingForm flight={selectedFlight} onSuccess={handleSuccess} />
        )}

        {booking && <SuccessBanner booking={booking} />}
      </div>
    </div>
  );
}