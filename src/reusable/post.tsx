import Link from "next/link";
import { Avatar } from "./avatar";

export function Post({
  value: post,
}: {
  value: { author: string; content: string; id: string; when: Date };
}) {
  return (
    <blockquote>
      {post.content}{" "}
      <Link href={`/users/${post.author}/posts/${post.id}`}>#</Link>
      <footer style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Avatar size={48} userId={post.author} />
        <div>
          {post.author}
          <div style={{ fontSize: "0.75em" }}>{post.when.toLocaleString()}</div>
        </div>
      </footer>
    </blockquote>
  );
}
