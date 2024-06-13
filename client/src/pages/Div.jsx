import div from '../operation/div';

function Div() {
   

  return (
    <>
     
     <h2> WELLCOME DEV CALCULATED</h2>
     

     <section className='h-[calc(100vh-100px)]  px-4 py-2 rounded-md border-double flex items-center justify-center bg-black '>

     <form action="" className=''>

        <input  type="text" placeholder='Enter X' 
        className='m-8 bg-violet-500	 placeholder:text-white		 text-black px-4 py-2 rounded-md' 
        id='prima' />

        <input  type="text" placeholder='Enter Y' 
        className='m-8 bg-violet-500	 placeholder:text-white		 text-black px-4 py-2 rounded-md' 
        id='secundaria' />

        <input  type="text" placeholder='Enter Z' 
        className='m-8 bg-violet-500	 placeholder:text-white		 text-black px-4 py-2 rounded-md' 
        id='terciaria' />



        
        <button className="rounded-md p-2 m-8 bg-white text text-black">CALCULATED</button>

    


        </form>

     </section>




    </>
  )
}

export default Div