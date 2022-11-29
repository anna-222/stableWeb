
import {useState, useEffect} from 'react'
import Posts from "./Posts"
import "../homeArticles.css"
import "../allArticles.css"
import useSWR from 'swr'
import Pagination from "./Pagination"
export default function AllArticles() {
    
    const [currentPage, setCurrentPage]= useState(1)
    const [postPerPage, setPostPerPage] = useState(9)
    const [totalPosts, setTotalPosts] = useState(0)
    const [products, setProducts] = useState([])
   

    // const fetchPosts = ()=>{
    //     return new Promise((resolve, reject)=>{
    //         console.log('start fetching')
    //         setTimeout(()=>{
    //             console.log('fetching posts')
    //             resolve([{"description":"200g cheese block","id":1,"image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649404/react-tutorial/products/cheese.png","name":"Cheese"}])
    //         },10000)
            
    //     })
    // }

    // useEffect(async ()=>{
    //     console.log('before fetch')
    //     const post = await fetchPosts()
    //     console.log('after fetch')
    //     setProducts(post)
    //     console.log("post.await",post)
    //     post.then( posts=>{
    //         console.log( "post.then",posts)
    //     })
    // },[])


        
    const fetcher = (...args) => fetch(...args).then(res => {
        const data = res.json().then(posts=>{
            setTotalPosts(posts.length)
        return posts})
    
        
        return data
    })
    const {data, error} = useSWR("https://jsonplaceholder.typicode.com/posts",fetcher)
    // console.log("data",data);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   


    // Get current page

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage 
    const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost)

    //changePage
    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    return(
        <section id="home-articles" className="py-2">
            <div className="container">
                <h2>Edytor Picks</h2>
                <div className="articles-container2">
                    <Posts data= {currentPosts} />
                </div>

                <Pagination postPerPage={postPerPage} totalPosts={totalPosts} paginate={paginate}/>
               
                
            </div>
           
         </section>
    )
}