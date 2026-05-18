"use client";

import { Building, ShieldCheck, Calculator, Cpu, Lightbulb } from "lucide-react";

export function ActuarialInstitutionsVisual() {
    return (
        <div className="w-full bg-slate-50 rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden font-sans border-t-8 border-t-blue-600">
            <div className="grid lg:grid-cols-2">
                {/* Left Side: Institutions */}
                <div className="p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 relative">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none" />

                    <div className="mb-10 text-center relative z-10">
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-slate-800">
                            <span className="text-blue-600">Top</span> Institutions
                        </h3>
                        <p className="text-slate-500 font-medium text-sm mt-1 uppercase tracking-widest">(Actuarial Science)</p>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {/* Government */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-lg transition-all">
                            <div className="bg-slate-100 px-6 py-4 flex items-center gap-4 border-b border-slate-200 group-hover:bg-blue-50 transition-colors">
                                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Building className="w-6 h-6" /></div>
                                <h4 className="font-bold text-slate-800 text-lg">Government</h4>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {["ISI (Kolkata/Delhi/Bangalore)", "Fergusson College (Pune)", "University of Mumbai", "Bharathidasan University", "AMU"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm md:text-base before:content-[''] before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full before:shrink-0">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Private */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-lg transition-all">
                            <div className="bg-slate-100 px-6 py-4 flex items-center gap-4 border-b border-slate-200 group-hover:bg-indigo-50 transition-colors">
                                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><ShieldCheck className="w-6 h-6" /></div>
                                <h4 className="font-bold text-slate-800 text-lg">Private</h4>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {["Amity (Noida)", "Christ University (Bangalore)", "IAQS (Mumbai)", "NMIMS (Mumbai)", "Manipal"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm md:text-base before:content-[''] before:w-1.5 before:h-1.5 before:bg-indigo-500 before:rounded-full before:shrink-0">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Career Opportunities */}
                <div className="p-6 md:p-10 relative bg-white">
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/30 blur-[100px] rounded-full pointer-events-none" />

                    <div className="mb-10 text-center relative z-10">
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-slate-800">
                            <span className="text-emerald-600">Career</span> Opportunities
                        </h3>
                        <p className="text-slate-500 font-medium text-sm mt-1 uppercase tracking-widest">(Actuarial Science)</p>
                    </div>

                    <div className="space-y-5 relative z-10">
                        {/* Traditional */}
                        <div className="flex bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
                            <div className="bg-slate-800 text-white w-20 shrink-0 flex items-center justify-center p-4 group-hover:bg-slate-900 transition-colors relative">
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-500" />
                                <Calculator className="w-8 h-8" />
                            </div>
                            <div className="p-5 flex-1">
                                <h4 className="font-bold text-slate-800 mb-2">Traditional</h4>
                                <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                                    {["Pricing Actuary", "Reserving Actuary", "Pension Actuary", "Appointed Actuary", "Consulting Actuary"].map((item, i) => (
                                        <span key={i} className="bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* New-Age / AI */}
                        <div className="flex bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
                            <div className="bg-emerald-600 text-white w-20 shrink-0 flex items-center justify-center p-4 group-hover:bg-emerald-700 transition-colors relative">
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-300 to-emerald-100" />
                                <Cpu className="w-8 h-8" />
                            </div>
                            <div className="p-5 flex-1">
                                <h4 className="font-bold text-slate-800 mb-2">New-Age / AI</h4>
                                <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                                    {["InsurTech PM", "Climate Risk", "Cyber Risk", "AI/ML Risk Modeller", "Data Scientist"].map((item, i) => (
                                        <span key={i} className="bg-white border border-slate-200 px-2 py-1 rounded shadow-sm text-emerald-800">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Entrepreneurship */}
                        <div className="flex bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
                            <div className="bg-amber-500 text-white w-20 shrink-0 flex items-center justify-center p-4 group-hover:bg-amber-600 transition-colors relative">
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 to-amber-100" />
                                <Lightbulb className="w-8 h-8" />
                            </div>
                            <div className="p-5 flex-1">
                                <h4 className="font-bold text-slate-800 mb-2">Entrepreneurship</h4>
                                <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                                    {["Independent Consulting", "InsurTech Startups", "Education & Coaching"].map((item, i) => (
                                        <span key={i} className="bg-white border border-slate-200 px-2 py-1 rounded shadow-sm text-amber-800">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
