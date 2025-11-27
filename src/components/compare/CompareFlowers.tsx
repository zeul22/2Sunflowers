import React, { useEffect, useState } from 'react'
import { getFlowersData } from '../../utils/apis'
import style from "./CompareFlowers.module.scss"
import Filter from '../Filter'

interface Flowers {
  title: string
  price: number
  productUrl: string
  imageUrl: string
  source: string
}

const CompareFlowers: React.FC = () => {
  const [flowers, setFlowers] = useState<Flowers[]>([])
  const [filterName, setfilterName] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortOrder, setSortOrder] = useState('none')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getFlowersDatafromAPI = async () => {
      try {
        const data = await getFlowersData()
        setFlowers(data)
      } finally {
        setLoading(false)
      }
    }
    getFlowersDatafromAPI()
  }, [])

  const filteredFlowers = flowers
    .filter((item) => {
      const priceValue = item.price / 100
      const meetsPrice = priceValue > 100
      const hasImage = Boolean(item.imageUrl)
      const matchesFilter = filterName === 'all' || filterName === item.source

      const inPriceRange = (() => {
        if (priceRange === 'all') return true
        if (priceRange === 'under-2000') return priceValue < 2000
        if (priceRange === '2000-4000') return priceValue >= 2000 && priceValue <= 4000
        if (priceRange === '4000-8000') return priceValue > 4000 && priceValue <= 8000
        if (priceRange === '8000-plus') return priceValue > 8000
        return true
      })()

      return meetsPrice && hasImage && matchesFilter && inPriceRange
    })
    .sort((a, b) => {
      if (sortOrder === 'low-high') return a.price - b.price
      if (sortOrder === 'high-low') return b.price - a.price
      return 0
    })

  return (
    <div className={style.page}>
      <section className={style.hero}>
        <p className={style.eyebrow}>Compare bouquets</p>
        <h1>Pick the flowers that deserve your cart</h1>
        <p className={style.subtitle}>
          Browse curated stems from multiple partners. Filter by store, scan the details, and jump to the product with a single tap.
        </p>
        <div className={style.heroStats}>
          <span>{flowers.length} items fetched</span>
          <span>{filteredFlowers.length} visible after filters</span>
        </div>
      </section>

      <div className={style.layout}>
        <aside className={style.sidebar}>
          <div className={style.sidebarCard}>
            <div className={style.sidebarHeading}>
              <p>Refine your view</p>
              <span>Brand filter</span>
            </div>
            <Filter setSource={setfilterName} setPriceRange={setPriceRange} setSortOrder={setSortOrder} />
          </div>
        </aside>

        <main className={style.resultsArea}>
          <div className={style.resultsHeader}>
            <div>
              <p className={style.eyebrow}>Results</p>
              <h2>Showing {filteredFlowers.length} bouquets</h2>
            </div>
            <div className={style.filterChip}>{filterName === 'all' ? 'All partners' : filterName}</div>
          </div>

          <div className={style.gridBox}>
            {loading ? (
              <div className={style.loader}>
                <div className={style.spinner} />
                <p>Fetching fresh stems...</p>
              </div>
            ) : filteredFlowers.length === 0 ? (
              <div className={style.emptyState}>
                <h3>No bouquets found</h3>
                <p>Try switching brands or check back soon for fresh stems.</p>
              </div>
            ) : (
              filteredFlowers.map((item, index) => (
                <div className={style.flowerBox} key={`${item.productUrl}-${index}`}>
                  <div className={style.cardImage}>
                    <img src={item.imageUrl} alt={item.title} />
                    <span className={style.sourceTag}>{item.source}</span>
                  </div>
                  <div className={style.cardContent}>
                    <h3 title={item.title}>{item.title}</h3>
                    <div className={style.cardMeta}>
                      <p className={style.price}>Rs {item.price / 100}</p>
                      <a href={item.productUrl} target="_blank" rel="noreferrer" className={style.link}>
                        View product
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default CompareFlowers
