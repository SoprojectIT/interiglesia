import '../styles/globals.css';
import Head from './head'

export default function RootLayout({ children }) {
  // GLOBAL Layout
  return (
    <html lang="es">
      <Head/>
      <body>{children}</body>
    </html>
  )
}
