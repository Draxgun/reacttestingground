import {useQuery} from "@tanstack/react-query"
import Axios from "axios"

export const Home = () => {
    
    const {data: catData, isLoading, isError, refetch} = useQuery({
            queryKey: ["cat"],
            queryFn: () => {
                return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
            }
        });  
    
    if(isLoading){
        return <h1>Loading..</h1>
    }

    if(isError){
        return <h1>Something went wrong oops</h1>
    }

    return (
    <div>
        <p>{catData?.fact}</p>
        <button onClick={refetch}> Update data</button>

    </div>
    );
};