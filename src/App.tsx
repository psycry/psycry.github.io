// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/*<div>*/}
      {/*  <a href="https://vite.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      <h1>Digital Nomad LLC</h1>
        <a href = "https://play.google.com/store/apps/details?id=com.psycry.nomad_nexus" target="_blank" rel="noopener noreferrer">
            <p>
                <img src="/nomad_nexus.png" className="logo nomad_nexus" alt="Nomad Nexus logo" />
                <br />
                Nomad Nexus on Google Play
            </p>
        </a>
        <p>
            Not supported? <br />
            <a href = "https://nomadnexus-77758.web.app/" target="_blank" rel="noopener noreferrer">Try our web version</a>
        </p>
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}
    </>
  )
}

export default App
