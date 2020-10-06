import React, { useState, useEffect } from "react"
import axios from "axios"

const Cards = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character/`)
      console.log(result.data.results)
      setItems(result.data.results)
      setLoading(false)
    }
    fetchData()
  }, [])

  return loading ? (
    <h1>chargement...</h1>
  ) : (
    <div className="d-flex flex-wrap justify-content-around">
      {items.map((item) => (
        <div key={item.id} className="card" style={{width: '18rem'}}>
        <img src={item.image} className="card-img-top" alt="personnage" />
        <div className="card-body">
          <p className="card-text">{item.name}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

    

export default Cards
