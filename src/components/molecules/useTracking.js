import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export default function UseTracking() {
  var googleMeasurementId;
  if (process.env.NODE_ENV !== 'production') {
    googleMeasurementId = process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID;
  } else {
    googleMeasurementId = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID;
  }

  const location = useLocation();

  useEffect(() => {
    // Google Analytics 測定 ID を入力して設定
    ReactGA.initialize(googleMeasurementId);
    ReactGA.send({
      hitType: "pageview",
      // アクセスしたパス (pathname)を送付する
      page: location.pathname,
    });
  }, [location]);

  return null
}

// export default useTracking;