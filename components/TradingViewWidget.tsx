"use client";
import { cn } from "@/lib/utils";
import { memo } from "react";
import useTradingViewWidget from "../hooks/useTradingViewWidget";

interface TradingViewProps {
  title?: string;
  config: Record<string, unknown>;
  scriptUrl: string;
  className?: string;
  height?: number;
}

function TradingViewWidget({
  title,
  config,
  scriptUrl,
  className,
  height = 600,
}: TradingViewProps) {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>
      )}
      <div
        className={cn("tradingview-widget-container", className)}
        ref={containerRef}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
