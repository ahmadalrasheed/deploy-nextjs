import Head from 'next/head'
import { useState } from 'react'
import Header from './header'
import Main from './main'
import CreateForm from './createform'
import Footer from './footer'
import TableReport from './tablereport'
import { hours } from './data';

export default function CookieStandAdmin(props) {

  return (
    <div className="bg-green-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>

      <Main>
        
      <CreateForm EventHandler={props.EventHandler}/>
      </Main>
      <TableReport hours={hours} CookiesInformation={props.CookiesInformation} />
    
      <br />
      <div>
        {props.CookiesInformation.map(item => (
          <>
            <p className='text-center'>{`{"location":"${item.location}","minCustomers":"${item.minCustomers}","maxCustomers":"${item.maxCustomers}","avgCookies":"${item.avgCookies}"}`}</p>
          </>
        ))
        }
      </div>

      <Footer/>

    </div>
  )
}
