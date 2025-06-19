import PostCard from "@/components/PostCard";
async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simula un retraso de 2 segundos
  return data; // Agrega esta línea
}
async function PostPages() {
  const posts = await loadPosts();
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
export default PostPages;
