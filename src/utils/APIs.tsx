import axios from "axios";

const url = axios.create({
  baseURL: "https://localhost:2020",
});

export const getAllEntries = async () => {
  try {
    return await url.get("/data").then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const addEntry = async (data:any) => {
    try {
        await url.post('/data', data).then((res)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}
