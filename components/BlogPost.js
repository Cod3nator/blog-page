
import Link from 'next/link';
import React from 'react';

const BlogPost = ({ post }) => {
  return (
  <Link href={`posts/${post.id}`}>
        <h2>{post.title}</h2>
  </Link>
  );
};

export default BlogPost;
