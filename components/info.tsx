"use client";






const Info = (props:any) => {


  
  return ( 
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{props.data}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
    
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>
            {props.data}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
       
      </div>
    </div>
  );
}
 
export default Info;
