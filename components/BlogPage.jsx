import Link from 'next/link';
import React from 'react'


const BlogPage = ({post}) => {
 const  data=post[0];
  return (
   <>
   <h1>{data.id}</h1>
   <br />
   <div>{data.content}</div>
   <Link href='/'>Go back to home</Link>
   </>
  )
}

export default BlogPage