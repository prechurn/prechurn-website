import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import analytics from "@/lib/analytics";

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    analytics.pageView(location.pathname + location.search);
  }, [location]);
};

export default usePageTracking;
