import { Suspense } from "react";
import Posts from "@/src/app/posts/page";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.id);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Post Page {params.id}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          {post.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">{post.body}</p>
      </div>

      <hr className="border-gray-200" />

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Otras publicaciones
        </h3>
        <Suspense
          fallback={
            <div className="text-center text-gray-500 py-8">Cargando...</div>
          }
        >
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
