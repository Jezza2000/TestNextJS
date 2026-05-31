import { AIRPORTS } from '@/lib/schedules';

const ROUTES_DISPLAY = [
  '✦ Dairy Flat → Sydney',
  '✦ Rotorua Shuttle',
  '✦ Great Barrier Island',
  '✦ Chatham Islands',
  '✦ Lake Tekapo',
];

export default function Hero() {
  return (
    <div className="hero">
      <div className="brand">
        <span className="brand-name">JetSetter Airlines</span>
        <span className="brand-tag">Private Aviation</span>
      </div>
      <p className="tagline">
        Luxury point-to-point service from Dairy Flat Airport across Oceania.
        Ultra-modern business jets, uncompromising comfort.
      </p>
      <div className="route-pills">
        {ROUTES_DISPLAY.map(r => (
          <span key={r} className="pill">{r}</span>
        ))}
      </div>
      <div className="divider" />
    </div>
  );
}