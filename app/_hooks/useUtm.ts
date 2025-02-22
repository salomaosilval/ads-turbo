import { useEffect } from "react";
import { useContext } from "react";
import { UTMContext } from "@/app/_context/utm-context";
import { useSearchParams } from "next/navigation";

const useUtm = () => {
  const context = useContext(UTMContext);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!context) return;

    const utmSource = searchParams.get("utm_source");
    const utmMedium = searchParams.get("utm_medium");
    const utmCampaign = searchParams.get("utm_campaign");
    const utmContent = searchParams.get("utm_content");
    const utmTerm = searchParams.get("utm_term");

    if (utmSource || utmMedium || utmCampaign) {
      context.updateUtmParams({
        utm_source: utmSource || undefined,
        utm_medium: utmMedium || undefined,
        utm_campaign: utmCampaign || undefined,
        utm_content: utmContent || undefined,
        utm_term: utmTerm || undefined,
      });
    }
  }, [searchParams, context]);

  return context;
};

export default useUtm;
