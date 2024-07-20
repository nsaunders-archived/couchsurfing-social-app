import { Avatar } from "@/reusable/avatar";
import { Post } from "@/reusable/post";
import { getProfile } from "@/store";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function User({ id }: { id: string }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "Center" }}>
      <Avatar size={32} userId={id} />
      <span>{id}</span>
    </div>
  );
}

export default async function Page() {
  const id = cookies().get("id");
  let profile: Awaited<ReturnType<typeof getProfile>>;
  if (!id || !(profile = await getProfile(id.value))) {
    return redirect("/");
  }
  return (
    <main className="container">
      <h2>Profile</h2>
      <section>
        <h3>Identity</h3>
        <User id={id.value} />
      </section>
      <section>
        <h3>Friends</h3>
        <ul
          style={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {profile.friends.map((id) => (
            <li key={id} style={{ listStyleType: "none" }}>
              <User id={id} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Posts</h3>
        {profile.posts.map((post) => (
          <Post key={post.id} value={{ ...post, author: id.value }} />
        ))}
      </section>
    </main>
  );
}
