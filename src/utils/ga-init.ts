import ReactGA from "react-ga4";
import generateClientIdGa from "./generate-client-id-ga";

export const gaEnvKey = "VITE_GOOGLE_ANALYTICS_TRACKING_ID";

const ga = {
  initGoogleAnalytics() {
    const trackingId = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;
    if (!trackingId) {
      console.warn("No tracking id is found for Google Analytics");
      return;
    }

    ReactGA.initialize([
      {
        trackingId,
        gaOptions: {
          anonymizeIp: true,
          clientId: generateClientIdGa(),
        },
      },
    ]);
  },
};

export default ga;
