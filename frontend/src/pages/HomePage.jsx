import { Link } from 'react-router';
import { ArrowRightIcon, CheckIcon, Video, ZapIcon, Code2, Brain, CalendarCheck } from 'lucide-react';
import { SignInButton } from '@clerk/clerk-react';

function HomePage() {
    return (
        <div className='bg-gradient-to-br from-base-100 via-base-200 to-base-300'>
            {/* Navbar */}
            <nav className='bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg'>
                <div className='max-w-7xl mx-auto p-4 flex items-center justify-between'>
                    {/* Logo */}
                    <Link to={"/"} className='flex items-center gap-3 hover:scale-105 transition-transform duration-200'>
                        <div className='size-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg'>
                            <Video className="size-6 text-white" />
                        </div>

                        <div className='flex flex-col'>
                            <span className='font-black text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-mono tracking-wide'>
                                Remote Recruit
                            </span>

                        </div>

                    </Link>
                    {/*Auth Buttons */}
                    <SignInButton mode='modal'>
                        <button className='group px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2'>
                            <span>Sign In</span>
                            <ArrowRightIcon className='size-4 group-hover:translate-x-0.5' />
                        </button>
                    </SignInButton>
                </div>
            </nav>

            {/* Hero Section */}
            <div className='max-w-7xl mx-auto px-4 py-20'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>

                    {/* Left Content */}
                    <div className='space-y-8'>
                        <div className='badge badge-primary badge-lg'>
                            <ZapIcon className='size-4' />
                            Real-time Collaboration
                        </div>
                        <h1 className='text-5 lg:text-5xl font-black leading-tight'>
                            <span className='btext-base-content'>
                                Schedule and Manage
                            </span>
                            <br />
                            <span className='text-base-content'>
                                Remote Job Interviews Online
                            </span>
                        </h1>

                        <p className='text-xl text-base-content/70 leading-relaxed max-w-xl'>
                            Remote Recruit is a modern platform for remote video and coding interviews.
                            Evaluate candidates in real time with collaborative coding and structured interviews.
                            Hire smarter, faster, and more efficiently.
                        </p>


                        {/*feature pills*/}
                        <div className='flex flex-wrap gap-4'>
                            <div className='badge badge-lg badge-outline'>
                                <CheckIcon className='size-4 text-success' />
                                Live video Chat
                            </div>
                            <div className='badge badge-lg badge-outline'>
                                <CheckIcon className='size-4 text-success' />
                                Code Editor
                            </div>
                            <div className='badge badge-lg badge-outline'>
                                <CheckIcon className='size-4 text-success' />
                                Multi-Language
                            </div>

                        </div>

                        {/*cta btn*/}

                        <div className='flex flex-wrap gap-4'>
                            <SignInButton mode="modal" >
                                <button className='btn btn-primary btn-lg'>
                                    Start Coading now
                                    <ArrowRightIcon className='size-5' />
                                </button>
                            </SignInButton>

                        </div>
                    </div>
                    {/*right image*/}
                    <img
                        src="/home.png"
                        alt="Code Platform"
                        className='w-full h-auto rounded-3xl shadow-2xl border-4 border-base-100 hover:scale-105 transition-transform duration-500'
                    />

                </div>

            </div>

            {/*feature section*/}
            <section className="bg-base-100 py-20">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Section Header */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold mb-4">
                            Everything You Need to Hire Smarter
                        </h2>
                        <p className="text-base-content/70 max-w-2xl mx-auto">
                            Remote Recruit combines video interviews, coding assessments,
                            and AI-driven insights in one platform.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
                            <div className="card-body items-center text-center">
                                <Video className="w-8 h-8 text-primary mb-4" />
                                <h3 className="card-title text-lg">Live Video Interviews</h3>
                                <p className="text-sm text-base-content/70">
                                    Conduct seamless one-on-one or panel interviews in real time.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
                            <div className="card-body items-center text-center">
                                <Code2 className="w-8 h-8 text-primary mb-4" />
                                <h3 className="card-title text-lg">Coding Interviews</h3>
                                <p className="text-sm text-base-content/70">
                                    Built-in code editor for real-time technical assessments.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
                            <div className="card-body items-center text-center">
                                <Brain className="w-8 h-8 text-primary mb-4" />
                                <h3 className="card-title text-lg">AI Evaluation</h3>
                                <p className="text-sm text-base-content/70">
                                    Smart insights and analytics on candidate performance.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
                            <div className="card-body items-center text-center">
                                <CalendarCheck className="w-8 h-8 text-primary mb-4" />
                                <h3 className="card-title text-lg">Smart Scheduling</h3>
                                <p className="text-sm text-base-content/70">
                                    Easy interview scheduling with reminders and coordination.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default HomePage;