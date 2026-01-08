import React from "react"; 
 
interface StatsBarProps { 
  userName?: string; 
  stats: { label: string; value: string | number; icon?: React.ReactNode; positive?: boolean; negative?: boolean }[]; 
} 
 
const StatsBar: React.FC<StatsBarProps> = ({ userName, stats }) => { 
  return ( 
    <div className="statsbar-container grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 animate-fade-in"> 
      {userName && ( 
        <div className="stat-card shadow bg-gray-800 ring-1 ring-yellow-400/40 text-center flex flex-col items-center py-4 rounded-2xl"> 
          <div className="text-base font-medium mb-1 text-gray-500">Welcome back</div> 
          <div className="text-xl font-bold text-yellow-400">{userName}</div> 
        </div> 
      )} 
      {stats.map((stat, idx) => ( 
        <div 
          key={idx} 
          className={`stat-card shadow bg-gray-800 p-4 rounded-2xl flex flex-col items-center text-center ${ 
            stat.positive 
              ? "border-l-4 border-green-400" 
              : stat.negative 
              ? "border-l-4 border-red-400" 
              : "border-l-4 border-blue-400" 
          } animate-fade-in`} 
        > 
          {stat.icon && <span className="mb-1 text-2xl">{stat.icon}</span>} 
          <div className="text-gray-400 text-sm font-medium">{stat.label}</div> 
          <div 
            className={`text-xl font-semibold ${stat.positive ? "text-green-400" : stat.negative ? "text-red-400" : "text-blue-400"}`} 
          > 
            {stat.value} 
          </div> 
        </div> 
      ))} 
    </div> 
  ); 
}; 
 
export default StatsBar;
