import Head from 'next/head'
import { useState } from 'react'

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
    <div className="bg-green-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex bg-green-500 justify-between p-4 ">
        <h1 className="text-4xl text-black font-bold" > Cookie Stand Admin</h1>
      </header>

      <main className="">
        <form class="m-auto mt-10 w-3/4 bg-green-300 mb-40 bg-green-300 rounded-3xl" onSubmit={EventHandler}>
          <div class="grid pb-100   gap-4 grid-rows-3">
            <div class="flex flex-col pt-10 w-full  text-center font-semibold md:text-xl"> Create Cookie Stand</div>
            <div class=" flex-2 ">
              <lable class="px-2 right-100 text-black-50 font-semibold  "> Location</lable>
              <input type="text" class=" w-11/12 form-control  " name="location" />
            </div>
            <div class="grid  gap-6 grid-cols-4 mb-5">
              <div class="grid  gap-2 grid-rows-2 m-3 ">
                <lable class="font-semibold"> Minimum Customers per Hour </lable>
                <input type="text" class="form-control" name='maxCust' />
              </div>
              <div class="grid  gap-2 grid-rows-2 m-3">
                <lable class="font-semibold" > Maximum Customers per Hour</lable>
                <input type="text" class="form-control" name="minCust" />
              </div>
              <div class="grid  gap-2 grid-rows-2 m-3">
                <lable class="font-semibold"> Average Cookies per Sale</lable>
                <input type="text" class="form-control" name="avg" />
              </div>
              <div class="grid  gap-2 grid-rows-1 m-3">
                <button class="font-semibold form-control bg-green-600" >Create</button>
              </div>
            </div>
          </div>
        </form>


      </main>
      <p className="text-center">Report Table Coming Soon..</p>
      <br />
      <div>
        {CookiesInformation.map(item => (
          <>
            <p className='text-center'>{`{"location":"${item.location}","minCustomers":"${item.minCustomers}","maxCustomers":"${item.maxCustomers}","avgCookies":"${item.avgCookies}"}`}</p>
          </>
        ))
        }
      </div>

      <footer className="flex bg-green-500 justify-between p-4 font-bold">
        <p>&copy;2021</p>
      </footer>
    </div>
  )
}
