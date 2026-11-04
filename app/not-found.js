import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="wrap" style={{ paddingBlock: "72px" }}>
      <p className="label">404</p>
      <h1>This page doesn't exist.</h1>
      <p style={{ marginTop: "16px" }}>
        <Link href="/">Back to the home page</Link>
      </p>
    </div>
  );
}
