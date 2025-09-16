"use client";

import { useEffect } from "react";

export default function DonationSection() {
  useEffect(() => {
    const containerSelector = "#paypal-container-X6ABAQF3KHVJC";

    function initPayPal() {
      // @ts-ignore
      if (typeof window === "undefined" || !(window as any).paypal) return;
      // @ts-ignore
      if ((window as any).paypal && (window as any).paypal.HostedButtons) {
        try {
          // @ts-ignore
          (window as any).paypal.HostedButtons({ hostedButtonId: "X6ABAQF3KHVJC" }).render(containerSelector);
        } catch (e) {
          // fail silently but log for debugging
          // eslint-disable-next-line no-console
          console.error("PayPal hosted buttons init error:", e);
        }
      }
    }

    // If PayPal SDK already loaded, initialize immediately
    // @ts-ignore
    if (typeof window !== "undefined" && (window as any).paypal) {
      initPayPal();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=BAAomlFNxNPJgGtgdXPGZoKo7JizFMJ6wCJp6WLe8Pb9Z5ALLEURBDiteqr4JdvHSf0u2WuiLiOyRJn-Y0&components=hosted-buttons&disable-funding=venmo&currency=GBP";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.addEventListener("load", initPayPal);
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", initPayPal);
    };
  }, []);

  return (
    <section id="donate" className="donation-section">
      <div className="container">
        <h3 className="donation-title">Donate</h3>
        <p className="donation-description">Support our work securely via PayPal.</p>

        <div id="paypal-container-X6ABAQF3KHVJC"></div>
      </div>
    </section>
  );
}
