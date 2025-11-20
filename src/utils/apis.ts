import axios from "axios"
export const getFlowersData=async ()=>{
    const response=await axios.get("http://localhost:8080/data")
    return response.data['flowerData']
}