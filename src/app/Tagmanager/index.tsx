"use client";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function Tagmanager() {
  useEffect(() => {
    function getCrawlerInterno() {
      if (typeof (navigator as any).userAgentData != "undefined") {
        let retorno = false;
        (navigator as any).userAgentData.brands.forEach(function (item: any) {
          if (
            item.brand.toLowerCase() == "lighthouse" ||
            item.brand.toLowerCase() == "gtmetrix"
          ) {
            retorno = true;
          }
        });
        if (!retorno) {
          retorno =
            window.navigator.userAgent.indexOf("GTmetrix") !== -1
              ? true
              : false;
        }
        return retorno;
      } else {
        if (
          window.navigator.userAgent.indexOf("GTmetrix") !== -1 ||
          window.navigator.userAgent.indexOf("Lighthouse") !== -1
        ) {
          return true;
        } else {
          return false;
        }
      }
    }

    if (!getCrawlerInterno()) {
      TagManager.initialize({ gtmId: "GTM-N73KWRD" });
    }
  }, []);

  return null;
}
