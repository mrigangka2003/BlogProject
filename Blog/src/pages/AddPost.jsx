import { useState,useEffect } from 'react'
import { Container,PostCard } from '../components' 
import appwriteService from '../appwrite/config'


const AddPost = () => {
    const[posts,setPosts] = useState([]) ;

    useEffect(()=>{
        const fetchPosts= async()=>{
            try {
                const response = await appwriteService.getPosts([]);
                if(response){
                    setPosts(response.documents) ;
                }
            } catch (error) {
                console.log("ERROR on fetching the POSTS :: ALLPOSTS :: 17")
            }
        }

        fetchPosts() ;
    },[])

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'> 
                {
                    posts.map((post)=>{
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard post = {post}/>
                        </div>
                    })
                }
            </div>
        </Container>
    </div>
  )
}

export default AddPost