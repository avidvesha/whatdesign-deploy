// @ts-nocheck
import ga from "./ga-init";

const loadAnalytics = () => {
  const trackingId = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;
  if (!trackingId) {
    console.warn("No Google Analytics tracking ID found.");
    return;
  }

  if (document.getElementById("google-analytics-script")) {
    return;
  }

  const script = document.createElement("script");
  script.id = "google-analytics-script";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: any[]) {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", trackingId, {
    anonymize_ip: true,
  });
};

export default loadAnalytics;
