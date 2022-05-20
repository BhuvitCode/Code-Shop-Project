import React,{useState} from 'react'
import axios from 'axios'

const LuckWheel = () => {
    
    const [LuckyItem, setLuckyItem] = useState([])

        const GetLuckyProduct = async () => {
            const {data} = await axios.get(`http://localhost:8000/api/v1/ProductApi/GetLuckyItems`, {},{headers: {'Content-Type': 'application/json'}});
            setLuckyItem(data)
          }

    const SpinWheel = (e) => {
        e.preventDefault()
        GetLuckyProduct()
    }
  return (
    <>

        {LuckyItem.map((LuckyItemArray) => {
            return(
                <p key={LuckyItemArray._id}>Your Lucky Prize Is {LuckyItemArray.LuckyItem}</p>
            )
          })}

        <button className='' onClick={SpinWheel}>Spin</button>
    </>
  )
}

export default LuckWheel