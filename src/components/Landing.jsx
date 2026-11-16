import React from 'react';

export default function Landing() {
    return (
        <div className="bg-secondary/10  w-full  md:w-2/3  rounded-xl overflow-hidden  border border-secondary/50 text-secondary"
            data-aos="fade-left"
            data-aos-delay="1000"
        >

            {/* Window Controls */}
            <div className="bg-surface-raised/50 px-6 py-4 flex items-center space-x-3 border-b border-secondary/20">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
            </div>

            {/* Code Content */}
            <div className="bg-card/40 p-8 text-base  leading-relaxed">
                <div className="text-foreground">
                    <span className="text-secondary-light font-semibold">export </span>{' '}
                    <span className="text-secondary-light font-semibold">const</span>{' '}
                    <span className="text-primary-light">coder</span>{' '}
                    <span className="text-muted-foreground">=</span>{' '}
                    <span className="text-yellow-300">{'() {'}</span>
                </div>

                <div className="ml-6 mt-3 space-y-2">
                    <div className="text-foreground">
                        <span className="text-primary-light">name</span>
                        <span className="text-muted-foreground"> :</span>{' '}
                        <span className="text-green-400 font-medium">'Said Bzioui'</span>
                        <span className="text-muted-foreground"> ,</span>
                    </div>

                    <div className="text-foreground">
                        <span className="text-primary-light">skills</span>
                        <span className="text-muted-foreground"> :</span>{' '}
                        <span className="text-yellow-300">[ </span>
                        <br />

                    </div>

                    <div className="text-foreground ml-14">
                        <span className="text-green-400 font-medium"> 'React'</span>
                        <span className="text-muted-foreground"> ,</span>{' '}
                        <span className="text-green-400 font-medium">'Tailwind'</span>
                        <span className="text-muted-foreground"> ,</span>{' '}
                        <span className="text-green-400 font-medium">'Javascript'</span>
                        <span className="text-muted-foreground"> ,</span>
                        <span className="text-green-400 font-medium">'NextJS'</span>
                        <span className="text-muted-foreground"> ,</span>{' '}
                        <span className="text-green-400 font-medium">'Redux'</span>
                        <span className="text-muted-foreground"> ,</span>{' '}
                        <span className="text-green-400 font-medium">'Express'</span>
                        <span className="text-muted-foreground"> ,</span>{' '}
                        <span className="text-green-400 font-medium">'MongoDB' </span>
                        <br />
                        <span className="text-yellow-300"> ]</span>
                        <span className="text-muted-foreground"> ,</span>
                    </div>

                    <div className="text-foreground">
                        <span className="text-primary-light">hard_Worker</span>
                        <span className="text-muted-foreground"> :</span>{' '}
                        <span className="text-orange-300 font-semibold">true</span>
                        <span className="text-muted-foreground"> ,</span>
                    </div>

                    <div className="text-foreground">
                        <span className="text-primary-light">quick_Learner</span>
                        <span className="text-muted-foreground"> :</span>{' '}
                        <span className="text-orange-300 font-semibold">true</span>
                        <span className="text-muted-foreground"> ,</span>
                    </div>

                    <div className="text-foreground">
                        <span className="text-primary-light">problem_Solver</span>
                        <span className="text-muted-foreground"> :</span>{' '}
                        <span className="text-orange-300 font-semibold">true</span>
                        <span className="text-muted-foreground"> ,</span>
                    </div>

                    <div className="text-foreground">
                        <span className="text-primary-light">Autonomie</span>
                        <span className="text-muted-foreground"> :</span>{' '}
                        <span className="text-orange-300 font-semibold">true</span>
                        <span className="text-muted-foreground"> ,</span>
                    </div>


                    <div className="text-foreground mt-3">
                        <span className="text-yellow-300">{'}'}</span>
                        <span className="text-muted-foreground"> ;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}