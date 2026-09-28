import Card from './card.jsx'

export default function Cardlist({ cards, onAddToCard,selectedItems }) {
  return (
      
         <div className='grid grid-cols-3 gap-[20px]  px-[32px] 
          max-[390px]:grid max-[390px]:grid-cols-[1fr]  max-[390px]:w-full max-[390px]:h-auto '>
        {cards.map((card) => (
          <Card key={card.id} card={card} onAddToCard={onAddToCard} selectedItems={selectedItems}/>
        ))}
        </div>
      
    
      
  )
}
