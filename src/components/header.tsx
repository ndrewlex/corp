import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Performance</Link>
    </div>
  );
};

export default Header;
