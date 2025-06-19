import { Suspense } from "react";
import Posts from "@/components/Posts";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.id); // Cambiar a params.id

  return (
    <div>
      <h1>Post Page {params.id}</h1> {/* Cambiar a params.id */}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
      <h3>Otras publicaciones</h3>
      <Suspense fallback={<div>Cargando...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
}

export default Page;
