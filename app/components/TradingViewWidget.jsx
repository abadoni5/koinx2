import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget = () => {
    const container = useRef();

    useEffect(() => {
        // Check if the script has already been appended
        if (!container.current.querySelector('script')) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
                {
                  "height": "100%",
                  "width": "100%",
                  "symbol": "BITSTAMP:BTCUSD",
                  "interval": "D",
                  "timezone": "Etc/UTC",
                  "theme": "light",
                  "style": "3",
                  "locale": "en",
                  "enable_publishing": false,
                  "hide_top_toolbar": true,
                  "hide_legend": true,
                  "save_image": false,
                  "calendar": false,
                  "hide_volume": true,
                  "support_host": "https://www.tradingview.com"
                }`;
            container.current.appendChild(script);
        }
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
        </div>
    );
};

export default memo(TradingViewWidget);
