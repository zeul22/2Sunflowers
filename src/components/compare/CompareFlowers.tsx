import React, { useEffect, useState } from 'react'
import { getFlowersData } from '../../utils/apis'
import style from "./CompareFlowers.module.scss"
import Filter from '../Filter'

interface Flowers{
title:string,
price:number,
productUrl:string,
imageUrl:string,
source:string,
}
const CompareFlowers:React.FC = () => {
    const [flowers, setflowers] = useState([])
    const [filterName, setfilterName] = useState("all")
    
    useEffect(()=>{
        const getFlowersDatafromAPI=async()=>{
            const x=await getFlowersData()
            setflowers(x)
        }
         getFlowersDatafromAPI()
    },[])

    useEffect(() => {
  console.log(flowers)
}, [flowers])

  return (
    <div style={{
        display:"flex",
        minHeight:"100vh"
    }}>
        <div style={{
            minHeight:"100vh",
            width:"30vw",
            background:"gray",
        }}>
            <Filter setFn={setfilterName} />
        </div>
        <div className={`${style.gridBox}`}>

        {
            flowers.map((item:Flowers,index)=>{
                return ( 
                    <>
                    {
                        item.price/100>100 && item.imageUrl && filterName=='all' ?
                        <div className={`${style.flowerBox}`} key={index}>
                            <h1 style={{fontFamily:"sans-serif"}}>{item.title}</h1>
                            <img src={item.imageUrl} alt="" style={{
                                height:"200px",
                                width:"200px"
                            }} />
                            <p>Rs { item.price/100}</p>
                            <a href={`${item.productUrl}`} target='_blank'>Click Here</a>
                        </div>
                        :
                        item.price/100>100 && item.imageUrl && filterName==item.source?
                        <div className={`${style.flowerBox}`} key={index}>
                            <h1 style={{fontFamily:"sans-serif"}}>{item.title}</h1>
                            <img src={item.imageUrl} alt="" style={{
                                height:"200px",
                                width:"200px"
                            }} />
                            <p>Rs { item.price/100}</p>
                            <a href={`${item.productUrl}`} target='_blank'>Click Here</a>
                        </div>
                        :
                        <></>
                    }
                    </>
                )
            })
        }
        </div>
    </div>
  )
}

export default CompareFlowers