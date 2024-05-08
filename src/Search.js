import { useSearchParams } from "react-router-dom"
import ListCake from "./ListCake";
export default function Search()
{
    var [query,setQuery] = useSearchParams();
    //var query = useSearchParams();
    var name = query.get("name")
    return (
        <>
            {/* <h1>{name}</h1> */}
            <ListCake searchQuery={name}/>
        </>
    )

}