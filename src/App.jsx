
import { Suspense } from 'react';
import './App.css'
import Countries from './Countries/Countries';
import Country from './Country/Country';

const countryPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json());

function App() {


  return (
    <>
      <h1>get start our projects</h1>
    <Suspense fallback={<p>waiting for veiw....</p>}> 
       <Countries countryPromise={countryPromise}> jjj</Countries>
       </Suspense>
       <Country ></Country>
      

    </>
  )
}

export default App
