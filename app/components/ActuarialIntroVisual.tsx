"use client";

import { BarChart3, PieChart, Activity, TrendingUp, MonitorPlay, Database } from "lucide-react";

export function ActuarialIntroVisual() {
    return (
        <div className="w-full h-full min-h-[400px] bg-slate-900 rounded-2xl p-6 relative overflow-hidden flex flex-col gap-4 border-4 border-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none" />

            {/* Top Bar */}
            <div className="flex items-center justify-between z-10 border-b border-slate-700/50 pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500" />
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-slate-400 font-mono text-xs ml-4 font-semibold tracking-wider">RISK_PREDICTION_ENGINE_V2.0</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-2">
                    <Activity className="w-3 h-3 animate-pulse" /> LIVE
                </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-2 gap-4 flex-1 z-10 pt-2">
                {/* Left Column: Line Chart & Stats */}
                <div className="flex flex-col gap-4">
                    <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50 flex flex-col flex-1 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-slate-300 text-sm font-semibold flex items-center gap-2"><TrendingUp className="w-4 h-4 text-emerald-400" /> Future Projections</span>
                            <span className="text-emerald-400 text-xs font-bold">+14.2%</span>
                        </div>
                        <div className="flex-1 flex items-end gap-2 px-2 pb-2">
                            {[40, 60, 45, 80, 65, 90, 110, 85, 120].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm transition-all duration-500 hover:from-indigo-500 hover:to-indigo-300 relative group/bar" style={{ height: `${h}%` }}>
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity shadow-lg">
                                        {(h * 1.5).toFixed(0)}K
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 shrink-0">
                            <Database className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div>
                            <div className="text-slate-400 text-xs font-semibold mb-1">Mortality Data Processing</div>
                            <div className="text-white font-bold tracking-wider">8,492,104 <span className="text-slate-500 text-xs font-normal">Records</span></div>
                            <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                                <div className="bg-indigo-500 h-full w-[78%] rounded-full relative">
                                    <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Pie Chart & Metrics */}
                <div className="flex flex-col gap-4">
                    <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50 flex-1 flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="absolute top-4 left-4 text-slate-300 text-sm font-semibold flex items-center gap-2"><PieChart className="w-4 h-4 text-amber-400" /> Risk Distribution</div>
                        <div className="relative w-32 h-32 mt-6">
                            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1e293b" strokeWidth="20" />
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="100" className="hover:stroke-[#60a5fa] transition-colors cursor-pointer" />
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="180" className="hover:stroke-[#34d399] transition-colors cursor-pointer" />
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="220" className="hover:stroke-[#fbbf24] transition-colors cursor-pointer" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="text-white font-bold text-lg">94%</div>
                                <div className="text-slate-400 text-[10px]">Confidence</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50 relative overflow-hidden group">
                            <div className="absolute right-2 top-2 opacity-50"><MonitorPlay className="w-5 h-5 text-blue-400" /></div>
                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Simulations</div>
                            <div className="text-white font-black text-xl">1.2M+</div>
                        </div>
                        <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50 relative overflow-hidden group">
                            <div className="absolute right-2 top-2 opacity-50"><BarChart3 className="w-5 h-5 text-purple-400" /></div>
                            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Models</div>
                            <div className="text-white font-black text-xl">42 Active</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
