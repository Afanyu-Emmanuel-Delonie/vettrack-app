import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col pt-16">{children}</main>
      <Footer />
    </>
  );
}
