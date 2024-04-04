import React from "react";
import Header from "../../components/shared/Header/Header";
import ContactUs from "../../components/shared/ContactUs/ContactUs";
import Search from "./Search";
import Cardimage from "./Cardimage";
import Footer from "../../components/shared/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <ContactUs />
      <Search />
      <Cardimage />
      <Footer />
    </>
  );
};

export default Home;
