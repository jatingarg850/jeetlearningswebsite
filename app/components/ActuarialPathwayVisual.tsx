"use client";

import { ArrowRight, ArrowDown, MapPin, Building2, TrendingUp, BadgeIndianRupee, Globe2 } from "lucide-react";

export function ActuarialPathwayVisual() {
    return (
        <div className="w-full bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden flex flex-col font-sans">
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 md:p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wider relative z-10">Careeer Pathways & Market Snapshot <span className="text-amber-400">2026</span></h3>
            </div>

            {/* Pathways Section */}
            <div className="p-4 md:p-8 bg-slate-50 border-b border-slate-200">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">Career Pathways</h4>

                <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                    {/* Entry Points */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-blue-600 text-white p-4 rounded-xl text-center shadow-md relative group">
                            <div className="font-bold mb-1">After Class 12</div>
                            <div className="text-xs text-blue-100">Take ACET Exam (Free entrance by IAI)</div>
                            <div className="hidden md:block absolute -bottom-6 left-1/2 -translate-x-1/2"><ArrowDown className="text-slate-300" /></div>
                        </div>
                        <div className="bg-purple-600 text-white p-4 rounded-xl text-center shadow-md relative group">
                            <div className="font-bold mb-1">After Graduation</div>
                            <div className="text-xs text-purple-100">Maths, Stats, Economics, Engg., CA/CS</div>
                            <div className="hidden md:block absolute -bottom-6 left-1/2 -translate-x-1/2"><ArrowDown className="text-slate-300" /></div>
                        </div>
                        <div className="bg-amber-500 text-white p-4 rounded-xl text-center shadow-md relative group">
                            <div className="font-bold mb-1">Direct IAI Entry</div>
                            <div className="text-xs text-amber-50">With valid exam exemptions</div>
                            <div className="hidden md:block absolute -bottom-6 left-1/2 -translate-x-1/2"><ArrowDown className="text-slate-300" /></div>
                        </div>
                    </div>

                    <div className="flex justify-center my-2 md:hidden"><ArrowDown className="text-slate-300" /></div>

                    {/* Exam Structure */}
                    <div className="bg-white border-2 border-indigo-100 p-6 rounded-2xl text-center shadow-sm mt-4 md:mt-6 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full border border-indigo-200 shadow-sm">CORE JOURNEY</div>
                        <h5 className="font-bold text-slate-800 text-2xl mb-2">~15 Papers accross 4 Stages</h5>
                        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600 font-medium">
                            <span>Core Principles</span> <ArrowRight className="w-4 h-4 text-slate-400" />
                            <span>Core Practices</span> <ArrowRight className="w-4 h-4 text-slate-400" />
                            <span>Specialist Tech</span> <ArrowRight className="w-4 h-4 text-slate-400" />
                            <span>Specialist App</span>
                        </div>
                        {/* International Route Tag */}
                        <div className="mt-4 flex items-center justify-center gap-2 text-xs bg-slate-50 text-slate-600 p-2 rounded-lg border border-slate-200">
                            <Globe2 className="w-4 h-4 text-blue-500" />
                            <strong>International Route:</strong> Pursue IAI + IFoA(UK)/SOA(US) simultaneously
                        </div>
                    </div>

                    <div className="flex justify-center my-2"><ArrowDown className="text-slate-300" /></div>

                    {/* Destination */}
                    <div className="bg-emerald-600 text-white p-5 rounded-2xl text-center shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative flex items-center justify-center gap-4">
                            <div className="text-left">
                                <div className="font-bold text-xl drop-shadow-sm">Fellow Actuary (FIAI)</div>
                                <div className="text-emerald-100 text-sm font-medium">+ 3 Years Work Experience</div>
                            </div>
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Market Snapshot */}
            <div className="p-4 md:p-8 bg-white grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Salary */}
                <div>
                    <h4 className="flex items-center gap-2 text-2xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100"><BadgeIndianRupee className="text-emerald-500" /> Salary Snapshot</h4>
                    <div className="relative pl-6 border-l-4 border-indigo-100 space-y-6">
                        <div className="absolute top-0 bottom-0 left-[-4px] w-1 bg-gradient-to-b from-indigo-500 to-blue-300" />

                        <div className="relative">
                            <div className="absolute -left-[28px] top-1 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-white" />
                            <div className="font-bold text-slate-800 text-2xl">CXO / Appointed<span className="text-slate-500 text-base font-normal ml-2">15+ yrs</span></div>
                            <div className="text-indigo-600 font-bold text-3xl mt-1">₹80 LPA — 2+ Cr</div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[28px] top-1 w-3 h-3 rounded-full bg-indigo-400 ring-4 ring-white" />
                            <div className="font-bold text-slate-700">Senior Actuary<span className="text-slate-500 text-xs font-normal ml-2">10+ yrs</span></div>
                            <div className="text-slate-600 font-semibold mt-0.5">₹40 — 80 LPA</div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[28px] top-1 w-3 h-3 rounded-full bg-blue-400 ring-4 ring-white" />
                            <div className="font-bold text-slate-700">Fellow Actuary<span className="text-slate-500 text-xs font-normal ml-2">5-8 yrs</span></div>
                            <div className="text-slate-600 font-semibold mt-0.5">₹20 — 40 LPA</div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[28px] top-1 w-3 h-3 rounded-full bg-slate-300 ring-4 ring-white" />
                            <div className="font-bold text-slate-700">Entry Level<span className="text-slate-500 text-xs font-normal ml-2">0-2 yrs</span></div>
                            <div className="text-slate-600 font-semibold mt-0.5">₹4 — 8 LPA</div>
                        </div>
                    </div>
                    <div className="mt-6 bg-slate-50 text-slate-500 text-xs p-3 rounded-lg border border-slate-100">
                        * Metro cities pay 20-40% higher. Each exam cleared adds 10-15% salary hike.
                    </div>
                </div>

                {/* Jobs */}
                <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100"><MapPin className="text-rose-500" /> Where Are the Jobs?</h4>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-800 mb-1">Top Cities</div>
                                <div className="text-slate-600 text-sm leading-relaxed">Mumbai, Gurugram/Delhi-NCR, Bangalore, Hyderabad, Pune</div>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-800 mb-1">Top Industries</div>
                                <div className="text-slate-600 text-sm leading-relaxed">Life/Health/General Insurance, Consulting (Aon, WTW, PwC, Deloitte), Reinsurance, Banking, Pensions, InsurTech</div>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                                <Globe2 className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-800 mb-1">Global Demand</div>
                                <div className="text-slate-600 text-sm leading-relaxed">Growing remote & freelance opportunities. Strong demand in UK, USA, UAE, Singapore.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
