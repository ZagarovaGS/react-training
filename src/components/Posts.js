import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../app/reducers/posts';

export default function Posts() {
  const { entities, loading } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(entities);

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <h2>Blog posts</h2>
      {entities.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
