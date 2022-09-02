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
import Schedule from 'react-schedule-job'
import ServiceRequest from "./features/site/ServiceRequest";
import ThankYou from "./features/site/ThankYou";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import "@fontsource/lexend-deca"; // Defaults to weight 400.
import { useEffect } from "react";
import { fetchAllCategories, getMessages } from "./features/site/siteSlice";
import { useMediaQuery } from "react-responsive";

export default function App() {
  const dispatch = useAppDispatch();
  const threadId = useAppSelector((state) => state.site.threadId);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const displayType = {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina
  };

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, []);

  const handleLoadMessageThreads = () => {
    // handle load messages
    console.log("load messages from the internet");
    if (threadId) {
      dispatch(getMessages(threadId))
    }
  };

  const jobs = [
    {
      fn: handleLoadMessageThreads,
      id: '1',
      schedule: '* * * * *'
      // this runs every minutes
    }
  ]
  
  return (
    <>
      <Schedule
          jobs={jobs}
          timeZone='local'
          // "UTC", "local" or "YOUR PREFERRED TIMEZONE",
          dashboard={{
            hidden: true
            // if true, dashboard is hidden
          }}
        />
      <Routes>
        <Route path="/" element={<LandingScreen displayType={displayType} />} />
        <Route path="/catalogue" element={<Categories displayType={displayType} />} />
        <Route path="/services/:id" element={<Services displayType={displayType} />} />
        <Route path="/service-request/:id" element={<ServiceRequest displayType={displayType} />} />
        <Route path="/thank-you-for-your-request" element={<ThankYou displayType={displayType} />} />
        <Route path="/about-us" element={<AboutUs displayType={displayType} />} />
        <Route path="/contact-us" element={<ContactUs displayType={displayType} />} />
        <Route path="*" element={<NotFound displayType={displayType} />} />
      </Routes>
    </>
  );
}