import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/utils/thunks";


const HomePosts = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts({page:1,order:"desc",limit:6})).then(response=>{
            console.log(response)
        })
    },[])


    return(
        <>
            Home posts
        </>
    )

}


export default HomePosts;
