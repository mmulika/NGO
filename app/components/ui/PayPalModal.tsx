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

    // Temporarily filter noisy PayPal messages about paylater ineligibility while modal is open
    const origConsoleError = console.error.bind(console);
    const origConsoleWarn = console.warn.bind(console);
    const origConsoleInfo = console.info.bind(console);
    const PAYPAL_NOISE_KEY = 'ncps_standalone_paylater_ineligible';

    function shouldFilterMessage(args: any[]) {
      try {
        for (const a of args) {
          if (!a) continue;
          if (typeof a === 'string') {
            if (a.includes(PAYPAL_NOISE_KEY) || a.includes('paylater_ineligible')) return true;
          } else if (typeof a === 'object') {
            try {
              const s = JSON.stringify(a);
              if (s && (s.includes(PAYPAL_NOISE_KEY) || s.includes('paylater_ineligible'))) return true;
            } catch (e) {
              // ignore stringify errors
            }
          }
        }
      } catch (e) {
        // noop
      }
      return false;
    }

    console.error = (...args: any[]) => {
      if (shouldFilterMessage(args)) return;
      origConsoleError(...args);
    };
    console.warn = (...args: any[]) => {
      if (shouldFilterMessage(args)) return;
      origConsoleWarn(...args);
    };
    console.info = (...args: any[]) => {
      if (shouldFilterMessage(args)) return;
      origConsoleInfo(...args);
    };

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
      // restore original console methods
      try {
        // @ts-ignore
        console.error = origConsoleError;
        // @ts-ignore
        console.warn = origConsoleWarn;
        // @ts-ignore
        console.info = origConsoleInfo;
      } catch (e) {
        // ignore
      }
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
          <p className="donation-description">Support our work securely via PayPal or scan the QR code to pay.</p>

          <div className="paypal-modal-grid">
            <div className="paypal-buttons-column">
              <div id={containerId} />
            </div>

            <div className="paypal-qr-column" aria-hidden="false">
              <figure className="paypal-qr-figure">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2Ff5c0c01e3f7e41c4bac21a540f0c4190?format=webp&width=800"
                  alt="TEEM Foundation donation QR code"
                  className="paypal-qr-image"
                />
                <figcaption className="paypal-qr-caption">Scan this QR code to donate</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .paypal-modal-overlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);z-index:1000}
        .paypal-modal{background:#fff;border-radius:8px;max-width:720px;width:96%;padding:20px;position:relative}
        .paypal-modal-close{position:absolute;right:12px;top:10px;background:transparent;border:0;font-size:24px;cursor:pointer}
        .paypal-modal-content{padding-top:8px}

        .paypal-modal-grid{display:flex;gap:16px;align-items:flex-start}
        .paypal-buttons-column{flex:1;min-width:220px}
        .paypal-qr-column{width:220px;display:flex;justify-content:center}
        .paypal-qr-figure{margin:0;text-align:center}
        .paypal-qr-image{max-width:100%;height:auto;border-radius:6px;box-shadow:0 2px 6px rgba(0,0,0,0.08)}
        .paypal-qr-caption{font-size:13px;color:var(--muted,#666);margin-top:8px}

        @media (max-width: 520px){
          .paypal-modal{max-width:520px;padding:16px}
          .paypal-modal-grid{flex-direction:column}
          .paypal-qr-column{width:100%}
        }
      `}</style>
    </div>
  );
}
