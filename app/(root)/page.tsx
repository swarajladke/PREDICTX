import TradingViewWidget from "@/components/TradingViewWidget"; 
import { 
    HEATMAP_WIDGET_CONFIG, 
    MARKET_DATA_WIDGET_CONFIG, 
    MARKET_OVERVIEW_WIDGET_CONFIG, 
    TOP_STORIES_WIDGET_CONFIG 
} from "@/lib/constants"; 
import {sendDailyNewsSummary} from "@/lib/inngest/functions"; 
 
const Home = () => { 
    const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`; 
 
    return ( 
      <div className="flex flex-col min-h-screen home-wrapper gap-8"> 
        <div className="dashboard-banner rounded-3xl p-5 md:p-7 mb-6 mt-2 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden"> 
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-blue-500/10 to-teal-500/10 opacity-50"></div> 
          <div className="relative z-10"> 
            <h1 className="font-extrabold text-transparent text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-400 to-teal-400 animate-fade-in drop-shadow-lg"> 
              Welcome to PredictX 
            </h1> 
            <p className="mt-2 max-w-2xl mx-auto text-base md:text-lg text-gray-300 animate-fade-in-delay font-medium"> 
              Your real-time stock market dashboard powered by intelligent analytics and dynamic alerts. 
            </p> 
          </div> 
        </div> 
        <section className="grid w-full gap-6 md:gap-8 home-section"> 
          <div className="widget-card md:col-span-1 xl:col-span-1 animate-fade-in group"> 
            <TradingViewWidget 
              title="Market Overview" 
              scriptUrl={`${scriptUrl}market-overview.js`} 
              config={MARKET_OVERVIEW_WIDGET_CONFIG} 
              className="custom-chart" 
              height={600} 
            /> 
          </div> 
          <div className="widget-card md-col-span xl:col-span-2 animate-fade-in-delay group"> 
            <TradingViewWidget 
              title="Stock Heatmap" 
              scriptUrl={`${scriptUrl}stock-heatmap.js`} 
              config={HEATMAP_WIDGET_CONFIG} 
              height={600} 
            /> 
          </div> 
        </section> 
        <section className="grid w-full gap-6 md:gap-8 home-section"> 
          <div className="widget-card h-full md:col-span-1 xl:col-span-1 animate-fade-in group"> 
            <TradingViewWidget 
              scriptUrl={`${scriptUrl}timeline.js`} 
              config={TOP_STORIES_WIDGET_CONFIG} 
              height={600} 
            /> 
          </div> 
          <div className="widget-card h-full md:col-span-1 xl:col-span-2 animate-fade-in-delay group"> 
            <TradingViewWidget 
              scriptUrl={`${scriptUrl}market-quotes.js`} 
              config={MARKET_DATA_WIDGET_CONFIG} 
              height={600} 
            /> 
          </div> 
        </section> 
      </div> 
    ) 
} 
 
export default Home;
