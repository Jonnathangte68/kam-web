import * as React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from "./features/site/AboutUs";
import ContactUs from "./features/site/ContactUs";
import LandingScreen from "./features/site/LandingScreen";
import NotFound from "./features/site/NotFound";
import Categories from "./features/site/Categories";
import Services from "./features/site/Services";
import ServiceRequest from "./features/site/ServiceRequest";
import ThankYou from "./features/site/ThankYou";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import "@fontsource/lexend-deca"; // Defaults to weight 400.
import { useEffect } from "react";
import { fetchAllCategories } from "./features/site/siteSlice";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, []);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/catalogue" element={<Categories />} />
        <Route path="/services/:id" element={<Services />} />
        <Route path="/service-request/:id" element={<ServiceRequest />} />
        <Route path="/thank-you-for-your-request" element={<ThankYou />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}