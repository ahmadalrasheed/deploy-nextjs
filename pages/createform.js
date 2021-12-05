export default function CreateForm(props){
    return (
        <form class="m-auto mt-10 w-3/4 bg-green-300 mb-40 bg-green-300 rounded-3xl" onSubmit={props.EventHandler}>
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
    )
}