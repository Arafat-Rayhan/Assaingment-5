import Button from './buttton'

export default function Card({ card, onAddToCard,selectedItems }) {
  return (
    <>
      <div className='w-72 px[20px] p-5 border-2 border-solid border-black rounded-[16px] p[20px] 
       max-[390px]:w-full max-[390px]:h-auto'>
        <div className='flex justify-between  '>
          <img src={card.image} alt={`${card.name} logo`} className='w-full max-w-[40px] h-[40px] object-contain max-[768px]:w-full'/>
          <div className='w-16.25 h-6 px-2.5 py-px border-1 dorder-solid bord-[#61DAFB] bg-[#E0F2FE] px-[10px] py-[2px] rounded-[9999px] '>
            <h3 className=' font[Plus_Jakarta_Sans] font-semibold text-xs leading[18px] tracking-normal text-[#0EA5E9] '>{card.badge}</h3>
          </div>
        </div>

        <div>
          <h1 className='font[Plus_Jakarta_Sans] font-bold text-lg leading[24px] font-bolt text-lg leading[28px] text-[#0F172A] pt-[6px] mt-[12px]'>{card.name}</h1>
          <p className='font-normal text-xs leading[19.5px] text-[#64748B] pb-[16px] pt-[6px]'>{card.description}</p>
        </div>

        <div className='block flex justify-between w-[246px] h-[30px] font-medium text-xs leading[17px] w-[246px] h-[30px] pt-[8px] mb-[16px] max-[390px]:w-full'>
          <div className='px-[8px] py-[2px] bg-[#F1F5F9] rounded-[4px]'>
            <h3 className=''>{card.category}</h3>
          </div>
          <div>
            <h3>{card.difficulty}</h3>
          </div>
          <div>{card.rating}</div>
        </div>

        <Button card={card} onAddToCard={onAddToCard} selectedItems={selectedItems} />
      </div>
    </>
  )
}
