"use client";

import { useEffect } from "react";

export default function DonationSection() {
  useEffect(() => {
    const hostedButtonId = "X6ABAQF3KHVJC";
    const containerId = `paypal-container-${hostedButtonId}`;
    const container = document.getElementById(containerId);
    if (!container) return;

    const renderedFlag = `__paypal_hosted_buttons_rendered_${hostedButtonId}`;

    function initPayPal() {
      // @ts-ignore
      if (typeof window === "undefined" || !(window as any).paypal) return;
      // avoid double-rendering
      // @ts-ignore
      if ((window as any)[renderedFlag]) return;
      // @ts-ignore
      if ((window as any).paypal && (window as any).paypal.HostedButtons) {
        try {
          // If the container already has children, assume it's rendered
          if (container.childElementCount > 0) {
            // @ts-ignore
            (window as any)[renderedFlag] = true;
            return;
          }
          // @ts-ignore
          (window as any).paypal.HostedButtons({ hostedButtonId }).render(`#${containerId}`);
          // mark as rendered to prevent duplicate listeners/renders
          // @ts-ignore
          (window as any)[renderedFlag] = true;
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error("PayPal hosted buttons init error:", e);
        }
      }
    }

    // Avoid injecting the SDK script multiple times. If an existing paypal sdk script exists, reuse it.
    const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]') as HTMLScriptElement | null;
    let attachedListener = false;

    if (existingScript) {
      // If SDK already available, initialize immediately
      // @ts-ignore
      if ((window as any).paypal) {
        initPayPal();
      } else {
        existingScript.addEventListener("load", initPayPal);
        attachedListener = true;
      }
    } else {
      const script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=BAAomlFNxNPJgGtgdXPGZoKo7JizFMJ6wCJp6WLe8Pb9Z5ALLEURBDiteqr4JdvHSf0u2WuiLiOyRJn-Y0&components=hosted-buttons&disable-funding=venmo,paylater&currency=GBP";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.addEventListener("load", initPayPal);
      document.body.appendChild(script);
      attachedListener = true;
      // Do not remove the script on unmount to avoid breaking other components/pages that use PayPal SDK
    }

    return () => {
      if (existingScript && attachedListener) {
        existingScript.removeEventListener("load", initPayPal);
      }
      // no-op otherwise — we intentionally leave the script in place
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
