import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/utils/thunks";

import { Button, Spinner } from "react-bootstrap"; 


const HomePosts = () => {
    const homePosts = useSelector((state)=>state.posts)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(homePosts.articles.items.length <= 0){
            dispatch(fetchPosts({page:1,order:"desc",limit:6}));
        }
    },[])


    const loadMorePosts = () => {
        const page = homePosts.articles.page + 1;
        dispatch(fetchPosts({page:page,order:"desc",limit:6}));
    }



    return(
        <>
            Home posts
            {!homePosts.articles.end && !homePosts.loading ?
                <Button variant="outline-dark" onClick={()=>loadMorePosts()}>
                    Load more posts
                </Button>
            :null}
            
        </>
    )

}


export default HomePosts;
