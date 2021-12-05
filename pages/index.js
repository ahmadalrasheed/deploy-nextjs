import Head from 'next/head'
import { useState } from 'react'
import CookieStandAdmin from '../components/cookiestandadmin'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function Home() {
  const [CookiesInformation, CookiesInformationHandler] = useState([])

  function EventHandler(e) {
    e.preventDefault();
    let my_object = {
      'location': e.target.location.value,
      'minCustomers': e.target.maxCust.value,
      'maxCustomers': e.target.minCust.value,
      'avgCookies': e.target.avg.value,
    }
    console.log('hello');
    CookiesInformationHandler([...CookiesInformation, my_object]);

  }

  return (
    <CookieStandAdmin EventHandler={EventHandler} CookiesInformation={CookiesInformation}/>
  )
}
