import "./SinglePost.css";
function SinglePost({ message }) {
  const { title, userId, id } = message;
  return (
    <div className="box">
      <h3>Title:{title}</h3>
      <h3>UserId:{userId}</h3>
      <h3>Id:{id}</h3>
    </div>
  );
}
export default SinglePost;
