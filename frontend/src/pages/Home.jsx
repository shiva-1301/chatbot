import ChatWidget from '../components/ChatWidget'

const Home = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800 mb-6 drop-shadow-sm">
                    Healthcare Assistant
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                    Your intelligent companion for health-related queries. <br />
                    <span className="text-base text-gray-500 mt-2 block">Powered by Groq & Llama 3</span>
                </p>

                <div className="mt-12 p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg max-w-lg mx-auto">
                    <p className="text-gray-700 italic">"Click the chat icon in the bottom right to start a conversation regarding your symptoms."</p>
                </div>
            </div>

            <ChatWidget />
        </div>
    )
}

export default Home
