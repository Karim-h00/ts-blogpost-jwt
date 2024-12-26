type PostCardProps = {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
}

const PostCard = (props: PostCardProps) => {
  return (
    <div className="post-card">
      <h3>#{props.id}: {props.title}</h3>
      <p>User ID: {props.userId}</p>
      <p>Status: {props.completed ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default PostCard;