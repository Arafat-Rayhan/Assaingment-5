import Navbar from './componant/navbar'
import Cardlist from './componant/cardlist'
import YourStack from './componant/YourStack'
import Benner from './componant/banner'
import { useState,Suspense } from 'react'
import Heading from './componant/headingOfList'
import Footer from './componant/footer'
import { toast } from 'react-toastify'

const loadCards = async () => {
      const response = await fetch('/Data.json')
      const data = await response.json()
      return data
     }

    const usersPromise=loadCards()

const App = () => {
  const [selectedItems, setSelectedItems] = useState([])
 

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
      <div className='pt-0 gap-[112px] '>
      <Benner/>
      <div className='max-[768px]:text-center  '>
           <Heading > </Heading>
          <div className='flex justify-between items-start w-[1216px] pt-[40px] 
           max-[390px]:grid max-[390px]:grid-cols-[1fr] max-[768px]:justify-items-center  '>  <Suspense fallback={ <p>loding.........</p>}>

                <Cardlist onAddToCard={hendelAddToCard} usersPromise={usersPromise}  selectedItems={selectedItems} />
           </Suspense>
                <YourStack cardItems={selectedItems} onRemoveFromecard={handelRemoveFromCard} allRemove={allRemove} />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;
