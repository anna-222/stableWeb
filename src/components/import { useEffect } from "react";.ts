import { useEffect } from "react";

useEffect(()=>{
    const fetchData = async () => {
        const response = await fetch("https://react-tutorial-demo.firebaseio.com/users.json")
        const data = await response.json()
        // setUsers(data);
    }
    fetchData()
},[])


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