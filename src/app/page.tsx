import { Avatar } from "@/reusable/avatar";
import { getAccounts } from "@/store";
import Link from "next/link";

export default async function Home() {
  const accounts = await getAccounts();
  return (
    <>
      <header className="container">
        <h1>Social app</h1>
      </header>
      <main className="container">
        <header>
          <hgroup>
            <h2>Login</h2>
            <p>Who are you?</p>
          </hgroup>
        </header>
        <ul
          style={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {accounts.map((id) => (
            <li
              key={id}
              style={{
                listStyleType: "none",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <Avatar size={32} userId={id} />
              <Link href={{ pathname: "/login", query: { id } }}>{id}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
