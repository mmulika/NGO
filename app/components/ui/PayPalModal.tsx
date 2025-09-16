"use client";

import { useEffect, useState } from "react";

export default function PayPalModal() {
  const hostedButtonId = "X6ABAQF3KHVJC";
  const containerId = `paypal-modal-container-${hostedButtonId}`;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openHandler = () => setIsOpen(true);
    const closeHandler = () => setIsOpen(false);
    window.addEventListener("open-paypal-modal", openHandler);
    window.addEventListener("close-paypal-modal", closeHandler);

    return () => {
      window.removeEventListener("open-paypal-modal", openHandler);
      window.removeEventListener("close-paypal-modal", closeHandler);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    const renderedFlag = `__paypal_hosted_buttons_rendered_${hostedButtonId}`;

    function initPayPal() {
      // @ts-ignore
      if (typeof window === "undefined" || !(window as any).paypal) return;
      // @ts-ignore
      if ((window as any)[renderedFlag]) return;
      // @ts-ignore
      if ((window as any).paypal && (window as any).paypal.HostedButtons) {
        try {
          if (container.childElementCount > 0) {
            // @ts-ignore
            (window as any)[renderedFlag] = true;
            return;
          }
          // @ts-ignore
          (window as any).paypal.HostedButtons({ hostedButtonId }).render(`#${containerId}`);
          // @ts-ignore
          (window as any)[renderedFlag] = true;
        } catch (e) {
          // eslint-disable-next-line no-console
          try {
            console.error("PayPal hosted buttons init error:", typeof e === 'object' ? JSON.stringify(e) : e);
          } catch (serializeErr) {
            console.error("PayPal hosted buttons init error (unserializable):", e);
          }
        }
      }
    }

    const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]') as HTMLScriptElement | null;
    let attachedListener = false;

    if (existingScript) {
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
    }

    // prevent background scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // handle escape key
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      if (existingScript && attachedListener) {
        existingScript.removeEventListener("load", initPayPal);
      }
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="paypal-modal-overlay" role="dialog" aria-modal="true">
      <div className="paypal-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="paypal-modal-close"
          aria-label="Close donation dialog"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        <div className="paypal-modal-content">
          <h3 className="donation-title">Donate</h3>
          <p className="donation-description">Support our work securely via PayPal.</p>
          <div id={containerId} />
        </div>
      </div>

      <style>{`
        .paypal-modal-overlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);z-index:1000}
        .paypal-modal{background:#fff;border-radius:8px;max-width:520px;width:94%;padding:20px;position:relative}
        .paypal-modal-close{position:absolute;right:12px;top:10px;background:transparent;border:0;font-size:24px;cursor:pointer}
        .paypal-modal-content{padding-top:8px}
      `}</style>
    </div>
  );
}
