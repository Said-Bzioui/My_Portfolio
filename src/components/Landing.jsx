import React from 'react';

export default function Landing() {
    return (
        <div className="bg-[#a855f7]/10  w-full  md:w-2/3  rounded-xl overflow-hidden  border border-[#a855f7]/50 text-[#a855f7]"
            data-aos="fade-left"
            data-aos-delay="1000"
        >

            {/* Window Controls */}
            <div className="bg-slate-800/50 px-6 py-4 flex items-center space-x-3 border-b border-purple-500/20">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
            </div>

            {/* Code Content */}
            <div className="bg-slate-900/40 p-8 text-base  leading-relaxed">
                <div className="text-gray-200">
                    <span className="text-purple-400 font-semibold">export </span>{' '}
                    <span className="text-purple-400 font-semibold">const</span>{' '}
                    <span className="text-blue-400">coder</span>{' '}
                    <span className="text-gray-400">=</span>{' '}
                    <span className="text-yellow-300">{'() {'}</span>
                </div>

                <div className="ml-6 mt-3 space-y-2">
                    <div className="text-gray-200">
                        <span className="text-blue-400">name</span>
                        <span className="text-gray-400"> :</span>{' '}
                        <span className="text-green-400 font-medium">'Said Bzioui'</span>
                        <span className="text-gray-400"> ,</span>
                    </div>

                    <div className="text-gray-200">
                        <span className="text-blue-400">skills</span>
                        <span className="text-gray-400"> :</span>{' '}
                        <span className="text-yellow-300">[ </span>
                        <br />

                    </div>

                    <div className="text-gray-200 ml-14">
                        <span className="text-green-400 font-medium"> 'React'</span>
                        <span className="text-gray-400"> ,</span>{' '}
                        <span className="text-green-400 font-medium">'Tailwind'</span>
                        <span className="text-gray-400"> ,</span>{' '}
                        <span className="text-green-400 font-medium">'Javascript'</span>
                        <span className="text-gray-400"> ,</span>
                        <span className="text-green-400 font-medium">'NextJS'</span>
                        <span className="text-gray-400"> ,</span>{' '}
                        <span className="text-green-400 font-medium">'Redux'</span>
                        <span className="text-gray-400"> ,</span>{' '}
                        <span className="text-green-400 font-medium">'Express'</span>
                        <span className="text-gray-400"> ,</span>{' '}
                        <span className="text-green-400 font-medium">'MongoDB' </span>
                        <br />
                        <span className="text-yellow-300"> ]</span>
                        <span className="text-gray-400"> ,</span>
                    </div>

                    <div className="text-gray-200">
                        <span className="text-blue-400">hard_Worker</span>
                        <span className="text-gray-400"> :</span>{' '}
                        <span className="text-orange-300 font-semibold">true</span>
                        <span className="text-gray-400"> ,</span>
                    </div>

                    <div className="text-gray-200">
                        <span className="text-blue-400">quick_Learner</span>
                        <span className="text-gray-400"> :</span>{' '}
                        <span className="text-orange-300 font-semibold">true</span>
                        <span className="text-gray-400"> ,</span>
                    </div>

                    <div className="text-gray-200">
                        <span className="text-blue-400">problem_Solver</span>
                        <span className="text-gray-400"> :</span>{' '}
                        <span className="text-orange-300 font-semibold">true</span>
                        <span className="text-gray-400"> ,</span>
                    </div>

                    <div className="text-gray-200">
                        <span className="text-blue-400">Self_Learner</span>
                        <span className="text-gray-400"> :</span>{' '}
                        <span className="text-orange-300 font-semibold">true</span>
                        <span className="text-gray-400"> ,</span>
                    </div>


                    <div className="text-gray-200 mt-3">
                        <span className="text-yellow-300">{'}'}</span>
                        <span className="text-gray-400"> ;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}