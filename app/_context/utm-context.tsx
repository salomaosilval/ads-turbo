"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

interface UTMContextType {
  utmParams: UTMParams;
  setUTMParams: (params: UTMParams) => void;
  updateUtmParams: (params: Partial<UTMParams>) => void;
}

export const UTMContext = createContext<UTMContextType | undefined>(undefined);

export function UTMProvider({ children }: { children: ReactNode }) {
  const [utmParams, setUTMParams] = useState<UTMParams>({});

  const updateUtmParams = (params: Partial<UTMParams>) => {
    setUTMParams((prev) => ({ ...prev, ...params }));
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utms: UTMParams = {};

    ["source", "medium", "campaign", "content", "term"].forEach((param) => {
      const value = params.get(`utm_${param}`);
      if (value) utms[`utm_${param}` as keyof UTMParams] = value;
    });

    setUTMParams(utms);
    localStorage.setItem("utmParams", JSON.stringify(utms));
  }, []);

  return (
    <UTMContext.Provider value={{ utmParams, setUTMParams, updateUtmParams }}>
      {children}
    </UTMContext.Provider>
  );
}

export const useUTM = () => {
  const context = useContext(UTMContext);
  if (!context) throw new Error("useUTM must be used within UTMProvider");
  return context;
};
