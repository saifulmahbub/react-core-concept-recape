import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

function Post() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <h3>Post:{post.length}</h3>
      {post.map((message) => (
        <SinglePost message={message}></SinglePost>
      ))}
    </div>
  );
}

export default Post;
