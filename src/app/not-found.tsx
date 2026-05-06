export default function RootNotFound() {
  return (
    <html>
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '24px'
        }}
      >
        <img
          src="/images/Masarat Logo.png"
          alt="Masarat Technologies"
          style={{
            width: '200px',
            height: 'auto',
            objectFit: 'contain',
            mixBlendMode: 'multiply',
            marginBottom: '24px'
          }}
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: '#1d1d1f',
            lineHeight: 1,
            marginBottom: 16
          }}
        >
          404
        </div>
        <div
          style={{
            width: 40,
            height: 2,
            background: '#2563EB',
            borderRadius: 2,
            margin: '0 auto 24px'
          }}
        />
        <p style={{ color: '#6B6B6B', fontSize: 15 }}>
          Page not found
        </p>
        
        <a
          href="/"
          style={{
            marginTop: 32,
            padding: '12px 28px',
            background: '#2563EB',
            color: 'white',
            borderRadius: 999,
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 600
          }}
        >
          Back to Home
        </a>
      </body>
    </html>
  )
}
