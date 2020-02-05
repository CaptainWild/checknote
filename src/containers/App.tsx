import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import CheckNoteApp from 'containers/CheckNoteApp'

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CheckNote</title>
      </Helmet>
      <CheckNoteApp />
    </HelmetProvider>
  )
}

export default App
