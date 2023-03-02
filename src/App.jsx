import Header from "./components/Header";
import Form from "./components/Form";
import ImgSite from "./components/ImgSite";
import Footer from "./components/Footer";
import "./styles/index.css";

const App = () => {
  return (
    <main className="main">
      <Header
        title="We are launching"
        spanText="soon!"
        subtitle="Subscribe and get notified"
      />
      <Form phText="Your email adress" btnText="Notify me" />
      <ImgSite />
      <Footer />
    </main>
  );
};

export default App;
