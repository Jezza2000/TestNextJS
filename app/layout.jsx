import './globals.css';

export const metadata = {
  title: 'JetSetter Airlines',
  description: 'Luxury point-to-point aviation across Oceania',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}