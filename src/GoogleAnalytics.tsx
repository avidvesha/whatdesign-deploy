// GoogleAnalytics.tsx
import { useEffect } from "react";

interface GAProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GAProps) {
  useEffect(() => {
    // 1. Prevent duplicate script injection
    if (document.getElementById("google-analytics-script")) return;

    // 2. Inject global tracking script
    const script = document.createElement("script");
    script.id = "google-analytics-script";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // 3. Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId);
  }, [measurementId]);

  return null;
}
