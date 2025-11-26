import axios from "axios"
export const getFlowersData=async ()=>{
    const response=await axios.get("https://sunflower.krotio.com/data")
    return response.data['flowerData']
}