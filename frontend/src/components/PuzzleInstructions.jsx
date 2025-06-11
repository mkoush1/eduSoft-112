import React from 'react';
import { useNavigate } from 'react-router-dom';

const PuzzleInstructions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDF8F8] flex items-center justify-center py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Floating Puzzle Game Badge */}
        <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 z-20">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white font-bold rounded-full shadow-lg text-lg tracking-wide border-4 border-white">
          </span>
        </div>
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#2563eb] to-[#60a5fa] px-8 py-14 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4zm4 4h8v8H8V8z" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-2 tracking-wide drop-shadow-lg">Puzzle Game Assessment</h1>
            <p className="text-white/80 text-lg">Test your logic and pattern recognition skills</p>
          </div>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 p-8">
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow border border-blue-100 hover:scale-105 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium mb-1">Category</p>
                <p className="text-2xl font-bold text-blue-800">Puzzle Game</p>
              </div>
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center group-hover:bg-blue-300 transition-colors">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4zm4 4h8v8H8V8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="group bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 shadow border border-sky-100 hover:scale-105 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-sky-600 font-medium mb-1">Duration</p>
                <p className="text-2xl font-bold text-sky-800">30 min</p>
              </div>
              <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center group-hover:bg-sky-300 transition-colors">
                <svg className="w-6 h-6 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="group bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 shadow border border-cyan-100 hover:scale-105 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-600 font-medium mb-1">Puzzles</p>
                <p className="text-2xl font-bold text-cyan-800">20</p>
              </div>
              <div className="w-12 h-12 bg-cyan-200 rounded-full flex items-center justify-center group-hover:bg-cyan-300 transition-colors">
                <svg className="w-6 h-6 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4zm4 4h8v8H8V8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="p-8">
          {/* About Section */}
          <div className="mb-10 bg-gradient-to-r from-[#2563eb]/5 to-[#60a5fa]/5 rounded-2xl p-8 border border-[#2563eb]/10 shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4zm4 4h8v8H8V8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#2563eb]">About this Assessment</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Challenge your logic, pattern recognition, and problem-solving skills with a series of interactive puzzles. This assessment is designed to test your ability to think critically and adapt to new challenges quickly.
            </p>
          </div>

          {/* Instructions Section */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#2563eb]">Instructions</h2>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-inner">
              <ul className="space-y-4">
                {[
                  { icon: "🧩", text: "Read each puzzle carefully before solving" },
                  { icon: "⏰", text: "You have 30 minutes to complete all puzzles" },
                  { icon: "🚫", text: "You cannot pause the assessment once started" },
                  { icon: "📡", text: "Ensure you have a stable internet connection" },
                  { icon: "💡", text: "Try to solve as many puzzles as possible for a higher score" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="text-2xl mr-4 transform transition-transform group-hover:scale-110">{item.icon}</span>
                    <span className="text-gray-700 text-lg pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col items-center">
                <span className="font-semibold text-[#2563eb] mb-2">Example of a Solved Puzzle:</span>
                <img src="/puzzle_solution.jpg" alt="Example Solution" className="rounded border border-gray-300" style={{maxWidth: '220px'}} />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex-1 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Dashboard
            </button>
            <button
              onClick={() => navigate('/assessment/puzzle-game/start')}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white rounded-lg font-semibold hover:from-[#2252b3] hover:to-[#5290e1] transition-all hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzleInstructions; 