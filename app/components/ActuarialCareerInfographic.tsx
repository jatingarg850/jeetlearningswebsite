"use client";

import { Award, Briefcase, Building, GraduationCap, Globe, Brain, HeartPulse, Scale, Landmark } from "lucide-react";

export function ActuarialCareerInfographic() {
    return (
        <div className="max-w-7xl mx-auto my-24 px-4 md:px-6 relative z-10">
            {/* Light Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-100 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 bg-white/60 backdrop-blur-2xl">

                {/* Header */}
                <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 p-10 md:p-14 text-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                    <h2 className="relative text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight drop-shadow-md mb-4">
                        Actuarial Science in India
                    </h2>
                    <p className="relative text-blue-100/90 text-lg md:text-2xl font-bold tracking-widest uppercase pb-2">
                        Inspiring Stories, Trends & Outlook
                    </p>
                </div>

                {/* Top Row: Pioneers & Trends */}
                <div className="grid lg:grid-cols-2 gap-0 bg-slate-50 border-b border-slate-200">

                    {/* Pioneers */}
                    <div className="p-8 md:p-12 bg-white transition-colors">
                        <div className="flex items-center gap-5 mb-10">
                            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 shadow-sm">
                                <Award className="text-amber-500 w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">Famous Indian Pioneers</h3>
                        </div>

                        <div className="space-y-6">
                            {[
                                { name: "Kantilal Pandit", desc: "Started India's first actuarial firm in the 1940s; passed London exams remotely without ever going there!", icon: <Briefcase className="w-6 h-6 text-indigo-600" /> },
                                { name: "S.P. Subhedar", desc: "Became MD of LIC, leading one of India's largest financial institutions.", icon: <Building className="w-6 h-6 text-indigo-600" /> },
                                { name: "Tanvi Doshi", desc: "Became a qualified actuary at just 23, setting an inspiring example for young professionals.", icon: <GraduationCap className="w-6 h-6 text-indigo-600" /> },
                                { name: "R. Ramakrishnan", desc: "Helped create India's Actuaries Act, 2006, establishing the legal framework for the profession.", icon: <Scale className="w-6 h-6 text-indigo-600" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 items-start group">
                                    <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-200 group-hover:scale-110 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">{item.name}</h4>
                                        <p className="text-base text-slate-600 mt-1.5 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-blue-50/80 rounded-3xl border border-blue-100 text-center relative overflow-hidden group shadow-inner">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-blue-100/50 to-blue-100/0 group-hover:-translate-x-full transition-transform duration-1000" />
                            <p className="text-base md:text-lg font-bold text-blue-800 tracking-wide">&quot;These pioneers built the profession from scratch.&quot;</p>
                        </div>
                    </div>

                    {/* Trends */}
                    <div className="p-8 md:p-12 bg-slate-50/50 transition-colors border-l border-slate-100">
                        <div className="flex items-center gap-5 mb-10">
                            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-sm">
                                <Globe className="text-emerald-500 w-10 h-10 animate-[spin_10s_linear_infinite]" />
                            </div>
                            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">Emerging Trends</h3>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "AI Actuaries", desc: "AI will do routine calculations, but humans will be needed to interpret the \"Ethics\" of the data.", icon: <Brain className="w-8 h-8 text-emerald-600" />, borderColor: 'border-emerald-200', bgColor: 'bg-emerald-50' },
                                { title: "Pandemic Modeling", desc: "A huge new field helping governments prepare for future health crises.", icon: <HeartPulse className="w-8 h-8 text-rose-500" />, borderColor: 'border-rose-200', bgColor: 'bg-rose-50' },
                                { title: "Climate Finance", desc: "Calculating the cost of a city sinking by 1 inch—and how to insure it.", icon: <Globe className="w-8 h-8 text-blue-600" />, borderColor: 'border-blue-200', bgColor: 'bg-blue-50' }
                            ].map((item, i) => (
                                <div key={i} className={`flex gap-6 items-start p-6 rounded-3xl border ${item.borderColor} hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 bg-white group cursor-pointer`}>
                                    <div className={`${item.bgColor} p-4 rounded-2xl shadow-sm border border-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">{item.title}</h4>
                                        <p className="text-base text-slate-600 mt-2 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Menu: Pathways */}
                <div className="p-10 md:p-14 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-200/30 blur-[100px] rounded-full" />

                    <h3 className="relative text-2xl md:text-3xl font-black text-center text-slate-800 mb-12 uppercase tracking-widest drop-shadow-sm">
                        Inspiring Pathways To Pursue
                    </h3>

                    <div className="relative grid md:grid-cols-3 gap-8 lg:gap-10">

                        <div className="bg-white/80 p-10 rounded-[2.5rem] shadow-xl border border-indigo-100 text-center flex flex-col items-center hover:shadow-2xl hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md group">
                            <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                                <GraduationCap className="w-10 h-10" />
                            </div>
                            <h4 className="text-xl font-extrabold text-slate-800 mb-4 tracking-wide">Education & Cert.</h4>
                            <p className="text-base text-slate-600 leading-relaxed font-medium">Institute of Actuaries of India (IAI), rigorously structured exams, specialized university courses.</p>
                        </div>

                        <div className="bg-white/80 p-10 rounded-[2.5rem] shadow-xl border border-blue-100 text-center flex flex-col items-center hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md group">
                            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-sm">
                                <Briefcase className="w-10 h-10" />
                            </div>
                            <h4 className="text-xl font-extrabold text-slate-800 mb-4 tracking-wide">Corporate Sector</h4>
                            <p className="text-base text-slate-600 leading-relaxed font-medium">Insurance companies, consulting firms, risk management, investment banking.</p>
                        </div>

                        <div className="bg-white/80 p-10 rounded-[2.5rem] shadow-xl border border-emerald-100 text-center flex flex-col items-center hover:shadow-2xl hover:border-emerald-300 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md group">
                            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl border border-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                                <Landmark className="w-10 h-10" />
                            </div>
                            <h4 className="text-xl font-extrabold text-slate-800 mb-4 tracking-wide">Public Policy</h4>
                            <p className="text-base text-slate-600 leading-relaxed font-medium">Pension reforms, social security, disaster risk financing, public health modeling.</p>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 border-t border-white/20 p-8 md:p-10 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                    <p className="relative text-base md:text-xl font-black tracking-widest text-white leading-relaxed z-10">
                        A CHALLENGING, HIGH-IMPACT SECURE CAREER = <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 ml-2 animate-pulse inline-block mt-2 md:mt-0 drop-shadow-md">A BRIGHT FUTURE IN ACTUARIAL SCIENCE</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
