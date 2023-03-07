import React from 'react';
import PostsContainer from '../../components/PostsContainer';
import PostsForm from '../../components/PostsForm';

export default function PostsPage() {
  return (
    <div>
      <PostsForm />
      <PostsContainer />
    </div>
  )
}
