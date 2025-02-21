"use client";

import { createContext, useState, useEffect } from "react";

type UTMParams = {
  source?: string;
  medium?: string;
  campaign?: string;
};

type UTMContextType = {
  utmParams: UTMParams;
  updateUtmParams: (params: UTMParams) => void;
};

export const UTMContext = createContext<UTMContextType | undefined>(undefined);

export const UTMProvider = ({ children }: { children: React.ReactNode }) => {
  const [utmParams, setUtmParams] = useState<UTMParams>({});

  useEffect(() => {
    const storedUtms = localStorage.getItem("utm_params");
    if (storedUtms) {
      setUtmParams(JSON.parse(storedUtms));
    }
  }, []);

  const updateUtmParams = (params: UTMParams) => {
    setUtmParams(params);
    localStorage.setItem("utm_params", JSON.stringify(params));
  };

  return (
    <UTMContext.Provider value={{ utmParams, updateUtmParams }}>
      {children}
    </UTMContext.Provider>
  );
};
