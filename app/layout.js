import './globals.css';

export const metadata = {
  title: 'Siddheshwar Solar | Solar EPC Company in Jaipur & Rajasthan',
  description: 'Siddheshwar Solar delivers custom-built rooftop and solar EPC solutions for homes, businesses and industries across Jaipur and Rajasthan.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
