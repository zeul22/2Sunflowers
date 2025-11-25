import React, { useEffect, useState } from 'react'

interface Filter{
    setFn:(x:string)=>void,
}

const Filter :React.FC<Filter>= (props:Filter) => {
    const [filter, setfilter] = useState("all")
    const {setFn}=props
    useEffect(()=>{
        setFn(filter)
    },[filter])
  return (
    <div>
        <div>
            Please apply filter as per needs
        </div>
        <div>
            Companies:
            <select onChange={(e)=>setfilter(e.target.value)}>
            <option value={"all"}  selected>all</option>
            <option  value={"FNP"}>FNP</option>
            <option value={"FLOWERAURA"}> FlowerAura</option>
            <option value={"INTERFLORA"}> InterFlora</option>

            </select>
        </div>
    </div>
  )
}

export default Filter