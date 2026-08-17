import React from 'react';
import LiveBuses from './LiveBuses';
import LiveMapPlaceholder from './LiveMapPlaceholder';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Real-time Transit Tracking for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart Cities</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-10">
          Track public transport in real-time. SVH26003 hackathon project bringing affordable IoT tracking to local buses.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-200">
            Find My Bus
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3.5 rounded-xl font-bold text-lg transition-all border border-gray-200 shadow-sm">
            View Schedules
          </button>
        </div>
      </div>

      {/* Stats/Features row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="glass-panel p-6 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-full text-green-600">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">System Status</p>
            <p className="text-xl font-bold text-gray-900">All Systems Operational</p>
          </div>
        </div>
        <div className="glass-panel p-6 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600">
            <Zap className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Update Frequency</p>
            <p className="text-xl font-bold text-gray-900">Every 5 Seconds</p>
          </div>
        </div>
        <div className="glass-panel p-6 flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-full text-purple-600">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Active Devices</p>
            <p className="text-xl font-bold text-gray-900">3 IoT Nodes</p>
          </div>
        </div>
      </div>

      {/* Main Content Areas */}
      <LiveBuses />
      <LiveMapPlaceholder />
    </div>
  );
}
