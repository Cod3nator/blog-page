import React from "react";
import blogPostsData from "../../../../data/blogPostsData.json";
import BlogPage from "../../../../components/BlogPage";


export async function generateStaticParams() {
  const staticParams = blogPostsData.map((post) => ({ id: post.id }));
  return staticParams;
}

export const getPosts = (params) => {
  const {postId}= params;
  const post = blogPostsData.filter((post) => post.id === parseInt(postId));

  return post;
};

export default function Page({ params }) {
  const post = getPosts(params);
  return (
    <>
      <BlogPage post={post} />
    </>
  );
}
