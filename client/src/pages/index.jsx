import AuthWrapper from "../components/AuthWrapper";
import Companies from "../components/Landing/Companies";
import Everything from "../components/Landing/Everything";
import ConstructNetBusiness from "../components/Landing/ConstructNetBusiness";
import HeroBanner from "../components/Landing/HeroBanner";
import JoinConstructNet from "../components/Landing/JoinConstructNet";
import PopularServices from "../components/Landing/PopularServices";
import Services from "../components/Landing/Services";
import { useStateProvider } from "../context/StateContext";
import React from "react";
import WhyChooseUs from "../components/Landing/WhyChooseUs";  

function Index() {
  const [{ showLoginModal, showSignupModal }] = useStateProvider();

  return (
    <div>
      <HeroBanner />
      <PopularServices />
      <WhyChooseUs />
      {/* <Companies /> */}
      <Everything />
      <Services />
      <ConstructNetBusiness />
      <JoinConstructNet />
      {(showLoginModal || showSignupModal) && (
        <AuthWrapper type={showLoginModal ? "login" : "signup"} />
      )}
    </div>
  );
}

export default Index;
