import DeleteIcon from '../assets/icons8-delete.gif'

export default function Selected({ selecTionItem, index, onRemoveFromecard }) {
  return (
    <div className='flex justify-between w-[231px] h-[50px] border border-solid rounded-[8px] border-[#E2E8F0] px-[10px]  max-[390px]:w-full max-[390px]:h-auto'>
      <div className='flex'>
        <img src={selecTionItem.image} alt={selecTionItem.name} className=''/>
        <div className='p-[10px]'>
          <h2 className='text-bolt text-[10px]'>{selecTionItem.name}</h2>
          <p className='text-bolt text-[6px] '>{selecTionItem.category}</p>
        </div>
      </div>

      <button type="button" onClick={() => onRemoveFromecard(index)}>
        <img src={DeleteIcon} alt="Remove item" />
      </button>
    </div>
  )
}
