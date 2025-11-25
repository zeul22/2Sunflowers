import axios from "axios"
export const getFlowersData=async ()=>{
    const response=await axios.get("http://15.206.203.155:8080/data")
    return response.data['flowerData']
}