import Brand from "@/view/Brand";
import Collection from "@/view/Collection";
import Connect from "@/view/Connect";
import Details from "@/view/Details";
import Drops from "@/view/Drops";
import Footer from "@/view/Footer";
import Header from "@/view/Header";
import Nav from "@/view/Nav";
import Popular from "@/view/Popular";
import Resource from "@/view/Resource";
import Trend from "@/view/Trend";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Details />
      <Drops />
      <Collection />
      <Trend />
      <Resource />
      <Popular />
      <Connect />
      <Brand />
      <Footer />
    </div>
  );
}
