import logo from '../assets/logo-text.png'
 
 function Footer() {
    return ( 
     <div className=' pt-[64px] pb-[48px] max-[390px]:grid max-[390px]:grid-cols-1 max-[390px]:justify-items-center'>
        <div className='px-[32px] gap-[56px]'>
        <div className="flex justify-between items-start h-[224px] mt-[64px] mb-[48px] px-[32px] pb-[56px]">
            <div className='max-[390px]:grid max-[390px]:grid-cols-1 max-[390px]:justify-items-center'>
                <img src={logo} className='mb-[10px]' />
                <p className='mb-[10px] max-[390px]:text-center'>Curated tools, technologies, and resources for developers building
               <br/> modern software.</p>
                <div className="flex justify-left gap-[16px] mb-[10px]">
                    <a href="">Github</a>
                    <a href="">Twitter</a>
                    <a href="">Linkedin</a>
                </div>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-[10px]'>
                <h2 className='max-[390px]:hidden'>PRODUCT</h2>
                <a href="" className='max-[390px]:hidden block mb-[10px]'>Home</a>
                <a href="" className='max-[390px]:hidden block mb-[10px]'>Tecnogies</a>
                <a href="" className='max-[390px]:hidden block mb-[10px]'>Projects</a>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-[10px]'>
                <h2 className='max-[390px]:hidden'>COMPANY</h2>
                <a href="" className='max-[390px]:hidden block'>Footer</a>
                <a href="" className='max-[390px]:hidden block'>Contact</a>
                <a href="" className='max-[390px]:hidden block'>Careers</a>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-[10px]'>
                <h2 className='max-[390px]:hidden'>LEGAL</h2>
                <a href="" className='max-[390px]:hidden block'>Privacy Policy</a>
                <a href="" className='max-[390px]:hidden block'>Terms of Service</a>
            </div>
        </div>
        <div className='flex justify-between px-[32px] pt-[32px] mt-[56px]'>
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className='flex justify-right gap-[16px] '>
                <a href=""className='block'>privacy</a>
                <a href=""className='block'>Terms</a>
            </div>
        </div>
        </div>
    </div>
    );
 }
 
 export default Footer;