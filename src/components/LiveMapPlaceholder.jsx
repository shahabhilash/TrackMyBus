import React from 'react';
import { Map } from 'lucide-react';

export default function LiveMapPlaceholder() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Route Map</h2>
      <div className="relative w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden border border-gray-300 shadow-inner flex flex-col items-center justify-center">
        {/* Placeholder background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="relative z-10 flex flex-col items-center bg-white/90 backdrop-blur px-8 py-6 rounded-2xl shadow-lg text-center max-w-sm border border-gray-100">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Map className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Map Integration Pending</h3>
          <p className="text-gray-500 text-sm">
            The real-time GPS map will be integrated in the next phase of the hackathon. 
            Hardware modules (NodeMCU + GPS) are being configured.
          </p>
          <button className="mt-5 bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            View API Docs
          </button>
        </div>
      </div>
    </div>
  );
}
