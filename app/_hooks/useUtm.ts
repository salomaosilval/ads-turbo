import { useEffect } from "react";
import { useContext } from "react";
import { UTMContext } from "@/app/_context/utm-context";
import { useSearchParams } from "next/navigation";

export function useUtm() {
  const context = useContext(UTMContext);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!context) return;

    const utmSource = searchParams.get("utm_source");
    const utmMedium = searchParams.get("utm_medium");
    const utmCampaign = searchParams.get("utm_campaign");

    if (utmSource || utmMedium || utmCampaign) {
      context.updateUtmParams({
        source: utmSource || undefined,
        medium: utmMedium || undefined,
        campaign: utmCampaign || undefined,
      });
    }
  }, [searchParams, context]);

  return context;
}
