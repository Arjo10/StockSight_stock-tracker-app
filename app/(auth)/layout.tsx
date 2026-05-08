import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/" className="auth-logo">
           <Image
  src="/assets/icons/logo.svg"
  alt="logo"
  width={140}
  height={40}
  className="h-8 w-auto"
  loading="eager"
/>
        </Link>
      </section>
    </main>
  );
};

export default Layout;