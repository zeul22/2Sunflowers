import React from 'react'
import styles from './Filter.module.scss'

interface FilterProps {
  setSource: (x: string) => void
  setPriceRange: (x: string) => void
  setSortOrder: (x: string) => void
}

const Filter: React.FC<FilterProps> = ({ setSource, setPriceRange, setSortOrder }) => {
  return (
    <div className={styles.filterPanel}>
      <div className={styles.field}>
        <label>Companies</label>
        <select defaultValue="all" onChange={(e) => setSource(e.target.value)}>
          <option value="all">All</option>
          <option value="FNP">FNP</option>
          <option value="FLOWERAURA">FlowerAura</option>
          <option value="INTERFLORA">InterFlora</option>
        </select>
      </div>

      <div className={styles.field}>
        <label>Price range</label>
        <select defaultValue="all" onChange={(e) => setPriceRange(e.target.value)}>
          <option value="all">Any</option>
          <option value="under-2000">Under Rs 2000</option>
          <option value="2000-4000">Rs 2000 - 4000</option>
          <option value="4000-8000">Rs 4000 - 8000</option>
          <option value="8000-plus">Above Rs 8000</option>
        </select>
      </div>

      <div className={styles.field}>
        <label>Sort by</label>
        <select defaultValue="none" onChange={(e) => setSortOrder(e.target.value)}>
          <option value="none">Default</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
