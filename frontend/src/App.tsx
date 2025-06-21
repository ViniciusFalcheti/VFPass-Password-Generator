// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './app.css'
import { FormSection } from './components/FormSection'
import { InfoSection } from './components/InfoSection'

export function App() {

  return (
    <>
      <div id='app'>
        <InfoSection />
        <FormSection />
      </div>
    </>
  )
}
