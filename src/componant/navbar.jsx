import logoText from '../assets/logo-text.png'
import menuBar from '../assets/icons8-menu-50.png'
function Navbar() {
  return (
    <>
    <nav className='grid grid-cols-[1fr_auto_1fr] items-center h-[81px]  border-b border-solid px-[32px] sticky top-0 z-50 bg-white mx-auto w-[100%]
      '>
      <img src={menuBar} alt=""className='hidden max-[390px]:block' />
      <img src={logoText} alt="" className='justify-self-start max-[390px]:w-[300px]   max-[768px]:justify-self-center ' />
      <div className='flex justify-self-center items-center gap-5 max-[390px]:hidden '>
        <a className='text-[#DB2777]' href="">Home</a>
        <a href="">Technologies</a>
        <a href="">Projects</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
     <div className='gap-5 flex items-center justify-self-end max-[768px]:w-[175px] max-[768px]:h[30px] '>
        <div>
        <a href="" className='max-[390]:w-[150px] max-[390]:h-[50px] max-[390]:text-[120px] max-[390]:text-bolt'>Sign in </a>
        </div>
        <button className='bg-[#D91B7E] text-white px-5 py-2.5 rounded-[9999px] max-[768px]:font-bolt max-[768px]:text-base'>Sign up</button>
      </div>
    </nav>
    </>
      
  )
}

export default Navbar;