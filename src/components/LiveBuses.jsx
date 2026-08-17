import React from 'react';
import { Bus, MapPin, Clock } from 'lucide-react';

const dummyBuses = [
  { id: 'BUS-101', route: 'Downtown - University', status: 'On Time', eta: '5 min', occupancy: 'Low', lat: 34.0522, lng: -118.2437 },
  { id: 'BUS-204', route: 'Central Station - North Mall', status: 'Delayed', eta: '12 min', occupancy: 'High', lat: 34.0531, lng: -118.2450 },
  { id: 'BUS-305', route: 'Tech Park - Westside', status: 'On Time', eta: '2 min', occupancy: 'Medium', lat: 34.0545, lng: -118.2420 },
];

export default function LiveBuses() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Live Buses</h2>
        <span className="flex items-center gap-2 text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full border border-green-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Live Tracking Active
        </span>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyBuses.map((bus) => (
          <div key={bus.id} className="glass-panel p-5 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2.5 rounded-lg">
                  <Bus className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{bus.id}</h3>
                  <p className="text-xs text-gray-500 font-medium">{bus.route}</p>
                </div>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                bus.status === 'On Time' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {bus.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                <span>ETA: <strong className="text-gray-900">{bus.eta}</strong></span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                <span>Next Stop: <strong className="text-gray-900">Main St. Station</strong></span>
              </div>
            </div>
            
            <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
              <div className="text-xs font-medium text-gray-500">
                Occupancy: <span className={`
                  ${bus.occupancy === 'Low' ? 'text-green-600' : ''}
                  ${bus.occupancy === 'Medium' ? 'text-yellow-600' : ''}
                  ${bus.occupancy === 'High' ? 'text-red-600' : ''}
                `}>{bus.occupancy}</span>
              </div>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                View on map &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
