import Navbar from "./Navbar";
type TChildren = {
  children: React.ReactNode;
};
export default function Layout({ children }: TChildren): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
