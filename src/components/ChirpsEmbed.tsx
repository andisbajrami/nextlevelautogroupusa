import { useEffect } from "react";

/** NextLevel Auto Group USA — Chirps AI assistant (https://chirps.cc). */
const CHIRPS_ASSISTANT_ID = "ee211cf9-e99d-4384-b4e2-d60650a05ba6";
const CHIRPS_SCRIPT_ID = "chirps-embed-script";
const CHIRPS_SCRIPT_SRC = "https://chirps.cc/embed.js";

declare global {
  interface Window {
    chirpsConfig?: { assistantId: string };
  }
}

/** Loads the Chirps AI chatbot widget. */
const ChirpsEmbed = () => {
  useEffect(() => {
    window.chirpsConfig = { assistantId: CHIRPS_ASSISTANT_ID };

    const existing = document.getElementById(CHIRPS_SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = CHIRPS_SCRIPT_ID;
    script.src = CHIRPS_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      delete window.chirpsConfig;
    };
  }, []);

  return null;
};

export default ChirpsEmbed;
