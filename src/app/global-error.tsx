"use client";

import { useEffect } from "react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Global Error:", error);
    }, [error]);

    return (
        <html lang="zh-Hans">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>System Error | Zhonghui Xingyuan</title>
                <style dangerouslySetInnerHTML={{
                    __html: `
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              background: #030712;
              color: #f0f6fc;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 24px;
            }
            .container {
              max-width: 500px;
            }
            .code {
              font-size: clamp(4rem, 15vw, 8rem);
              font-weight: 700;
              background: linear-gradient(135deg, #00e5ff 0%, #00ff9d 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              line-height: 1;
              margin-bottom: 16px;
            }
            h1 {
              font-size: 1.75rem;
              margin-bottom: 12px;
            }
            p {
              color: #8b9bb4;
              font-size: 1rem;
              line-height: 1.6;
              margin-bottom: 24px;
            }
            button {
              background: linear-gradient(135deg, #00e5ff 0%, #00b4d8 100%);
              color: #030712;
              border: none;
              padding: 12px 32px;
              font-size: 1rem;
              font-weight: 600;
              border-radius: 8px;
              cursor: pointer;
              transition: all 0.2s ease;
            }
            button:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(0, 229, 255, 0.4);
            }
            button:active {
              transform: translateY(0);
            }
          `
                }} />
            </head>
            <body>
                <div className="container">
                    <div className="code">500</div>
                    <h1>System Error</h1>
                    <p>
                        We sincerely apologize. A critical system error has occurred.
                        Please try refreshing the page.
                    </p>
                    <button onClick={() => reset()}>
                        Reload Page
                    </button>
                </div>
            </body>
        </html>
    );
}
