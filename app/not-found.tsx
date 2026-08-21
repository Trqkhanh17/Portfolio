import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <p>ERROR / WRONG TURN</p>
      <h1>4<span>0</span>4</h1>
      <p>THIS PAGE DOESN&apos;T EXIST. THAT&apos;S AWKWARD.</p>
      <Link href="/">TAKE ME HOME ←</Link>
    </main>
  );
}
