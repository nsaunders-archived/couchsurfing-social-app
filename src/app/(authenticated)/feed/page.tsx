import { Avatar } from "@/reusable/avatar";
import { Post } from "@/reusable/post";
import { getFeed } from "@/store";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const id = cookies().get("id");
  if (!id) {
    return redirect("/");
  }
  const feed = await getFeed(id.value);
  return (
    <main className="container">
      <h2>Feed</h2>
      {feed.map((post) => (
        <Post key={post.id} value={post} />
      ))}
    </main>
  );
}
