import Selected from './selected'

function SelectedCard({ cardItems, onRemoveFromecard, allRemove, }) {
  return (
    <div className="w-[280px] border border-solid rounded-[16px] border-[#475569] p-[20px]
     max-[390px]:w-full max-[390px]:h-auto">
      <h2>Your Stack</h2>

      {cardItems.length === 0 ? (
        <div>
          <div className='pb-[12px]'>
            <p className='font-normal text-xs leading-[16px] text-[#64748B]'>No technologies selected yet.</p>
          </div>
          <div className='p-[24px] w-[238px] h-[66px] border border-dashed rounded-[12px] border-[#94A3B8]'>
            <p>Your stack is empty.</p>
          </div>
        </div>
      ) : (
        <div>
          <p className='font-normal text-xs leading-[16px] pb-[12px] text-[#64748B]'>{cardItems.length} Technology Selected</p>
          {cardItems.map((selecTionItem, index) => (
            <Selected
              key={selecTionItem.id}
              selecTionItem={selecTionItem}
              index={index}
              onRemoveFromecard={onRemoveFromecard}
            />
          ))}

          <button onClick={() => {allRemove()}} className='w-[230px] h-[30px] border border-solid border-[#D82C20] rounded-[8px] text-[#D82C20] mt-[48px]'>Remove All</button>
        </div>
      )}
    </div>
  )
}

export default SelectedCard;