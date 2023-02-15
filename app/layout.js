import './globals.css'
import Head from './head'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head/>
      <body>{children}</body>
    </html>
  )
}
