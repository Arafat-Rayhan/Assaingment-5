import Navbar from './componant/navbar'
import Cardlist from './componant/cardlist'
import YourStack from './componant/YourStack'
import Benner from './componant/banner'
import { useEffect, useState } from 'react'
import Heading from './componant/headingOfList'
import Footer from './componant/footer'
import { toast } from 'react-toastify'

const App = () => {
  const [cards, setCards] = useState([])
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    const loadCards = async () => {
      const response = await fetch('/Data.json')
      const data = await response.json()
      setCards(data)
    }

    loadCards()
  }, [])

  const hendelAddToCard = (card) => {
    setSelectedItems((currentItems) => [...currentItems, card]);
    toast(`THE CARD IS ADDED`);
  }

  const handelRemoveFromCard = (indexToRemove) => {
    setSelectedItems((currentItems) => currentItems.filter((_, index) => index !== indexToRemove))
    toast(`THE CARD IS REMOVED`)
  }

  const allRemove = () => {setSelectedItems([]);
    toast(`ALL CARD IS REMOVED`)
  }

  

  

  return (
    <div className='w-full max-w-[1280px] mx-auto grid grid-cols-[1fr]  '>
      <Navbar />
      <div className='pt-[96px] gap-[112px] '>
      <Benner/>
      <div className='max-[768px]:text-center  '>
           <Heading > </Heading>
          <div className='flex justify-between items-start w-[1216px] pt-[40px] 
           max-[390px]:grid max-[390px]:grid-cols-[1fr] max-[768px]:justify-items-center  '>
                <Cardlist cards={cards} onAddToCard={hendelAddToCard} selectedItems={selectedItems} />
                <YourStack cardItems={selectedItems} onRemoveFromecard={handelRemoveFromCard} allRemove={allRemove} />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;
