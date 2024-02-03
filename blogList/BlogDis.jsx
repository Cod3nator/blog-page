import React from 'react';
import BlogPost from '../components/BlogPost';
import blogPostsData from '../data/blogPostsData.json';


const BlogDis = () => {
  const posts=blogPostsData;
  return (
<>
{posts.map((post,index)=>(
 
        <BlogPost post={post} key={index}/>
))}
</>
  );
};


export default BlogDis;
