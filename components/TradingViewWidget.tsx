'use client'; 
 
import React, { memo } from 'react'; 
import useTradingViewWidget from "@/hooks/useTradingViewWidget"; 
import {cn} from "@/lib/utils"; 
 
interface TradingViewWidgetProps {
    title?: string;
    scriptUrl: string;
    config: Record<string, unknown>;
    height?: number;
    mobileHeight?: number;
    className?: string;
}

const TradingViewWidget = ({ title, scriptUrl, config, height = 600, className }: TradingViewWidgetProps) => {
    const containerRef = useTradingViewWidget(scriptUrl, config, height);

    return (
        <div className="w-full">
            {title && (
                <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-100 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <span className="w-1 h-6 sm:h-8 bg-gradient-to-b from-yellow-400 to-blue-400 rounded-full"></span>
                    {title}
                </h3>
            )}
            <div className={cn('tradingview-widget-container', className)} ref={containerRef}>
                <div 
                    className="tradingview-widget-container__widget responsive-widget-height" 
                    style={{ 
                        width: "100%" 
                    }}
                />
            </div>
        </div>
    );
}
 
export default memo(TradingViewWidget);
