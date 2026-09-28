import bennerImg from '../assets/banner-stack.png'

function  Banner() {
  return (
    <>
    <div  className='gap-32 m-0 p-0 flex justify-between items-center w-[1216px] h-auto px-[32px]
    max-[768px]:flex max-[768px]:flex-col max-[768px]:gap-4'>
      <div className='py-[24px]  max-[768px]:flex max-[768px]:flex-col'>
  

      <div className=' max-[768px]:text-center '>
        <h1 className='font-extrabolt max-[390px]:font-extrabolt text-6xl max-[390px]:text-9xl leading-[90px] max-[390px]:leading[-300px] tracking-[-0.75px] max-[390px]:tracking-[-0.75px]'>Build Your Ideal</h1>
        <h1  className='font-extrabolt text-6xl max-[390px]:text-9xl leading-[60px]  max-[390px]:leading-[150px] tracking-[-1.5px] text-[#FF5722] pb-[24px] max-[390px]:font '>Development Stack</h1>
         

        <p className='font-normal  max-[390px]:font-extarbolt  text-lg max-[390px]:text-6xl leading-[29px] max-[390px]:leading-[60px] max-[390]:leading-[22px] pb-[40px] '>
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.
        </p>
      </div>
      <div className=' max-[768px]:flex max-[768px]:justify-center max-[768px]:gap-[80px]'>
        <button className='max-[390px]:w-[400px] max-[390px]:h-[70px] max-[390px]:font-bolt max-[390px]:text-4xl  h-[40px] border bg-[#EC4899] text-white rounded-[8px] max-[390px]:w-[145]  '>Explore Technologies</button>
        <button className='w-[168px] h-[40px] border rounded-[8px] max-[390px]:w-[145px]
        max-[390px]:w-[400px] max-[390px]:h-[70px] max-[390px]:font-bolt max-[390px]:text-4xl  h-[40px] border'>Learn More</button>
      </div>
      </div>

      <img src={bennerImg} alt="" className='w-[100%] max-[768px]:w-[200%]'/>
    </div>
    </>
  )
}

export default Banner