import { useCallback, useEffect, useState } from 'react'
import FeaturedGameCard from '../../molecules/FeaturedGameCard'
import { getFeaturedGame } from '../../../services/player'
import { FeaturedGameCardTypes } from '../../../services/data-types'

export default function FeaturedGames() {
  const [gameList, setGameList] = useState([])

  const getFeaturedGameList = useCallback(async () => {
    const { data } = await getFeaturedGame()

    setGameList(data)
  }, [getFeaturedGame])

  useEffect(() => {
    getFeaturedGameList()
  }, [])

  const API_IMAGE = process.env.NEXT_PUBLIC_IMAGES
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="
            d-flex
            flex-row flex-lg-wrap
            overflow-setting
            justify-content-lg-between
            gap-lg-3 gap-4
          "
          data-aos="fade-up"
        >
          {gameList.map((item: FeaturedGameCardTypes) => (
            <FeaturedGameCard
              key={item._id}
              title={item.name}
              category={item.category.name}
              thumbnail={`${API_IMAGE}/${item.thumbnail}`}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
