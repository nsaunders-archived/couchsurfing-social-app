import { Post } from "@/reusable/post";
import { getPost, getProfile } from "@/store";
import { notFound, redirect } from "next/navigation";

export default async function Page({
  params: { userId, postId },
}: {
  params: { userId: string; postId: string };
}) {
  let post: Awaited<ReturnType<typeof getPost>>;
  if (!userId || !postId || !(post = await getPost(userId, postId))) {
    return notFound();
  }
  return (
    <main className="container">
      <h2>Post</h2>
      <Post key={post.id} value={post} />
    </main>
  );
}
