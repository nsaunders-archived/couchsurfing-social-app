import { HighlightActiveLink } from "@/reusable/highlight-active-link";
import Link from "next/link";

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="container">
        <h1>Social app</h1>
        <nav>
          <ul>
            {(
              [
                ["Feed", "/feed"],
                ["Profile", "/profile"],
              ] as const
            ).map(([label, pathname]) => (
              <li key={pathname}>
                <Link href={pathname}>
                  <HighlightActiveLink pathname={pathname}>
                    {label}
                  </HighlightActiveLink>
                </Link>
              </li>
            ))}
            <li>
              <a href="/logout">Log out</a>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}
