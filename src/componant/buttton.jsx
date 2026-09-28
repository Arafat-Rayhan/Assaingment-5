const Button = ({ card, onAddToCard,selectedItems }) => {
  

  const isAdded=selectedItems.some(item => item.id === card.id);

    
    

    return(
        <button disabled={isAdded} onClick={()=>{onAddToCard(card)}}  className={`w-[246px] h-[36px] ${!isAdded?'bg-black':'bg-[#94A3B8]'} text-white rounded-[8px] 
        max-[390px]:w-[100%]`}>
        {isAdded ? 'Added to Stack' : 'Add to Stack'}
        </button>
    )
 }

export default Button