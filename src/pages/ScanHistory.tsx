import React from 'react';
import { ScanPreview } from '../components/ScanPreview';
import { Filter, Search } from 'lucide-react';

const historicalScans = [
  {
    id: '1',
    patientId: 'P001',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    scanDate: '2024-03-15T10:30:00Z',
    scanType: 'xray' as const,
    bodyPart: 'chest',
    deviceId: '2',
    aiAnalysis: {
      findings: [
        "Normal cardiac silhouette",
        "Clear lung fields",
        "No pleural effusions"
      ],
      confidence: 0.92,
      urgencyLevel: 'low' as const,
      recommendedActions: [
        "No follow-up required"
      ]
    }
  },
  {
    id: '2',
    patientId: 'P002',
    imageUrl: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80',
    scanDate: '2024-03-14T15:45:00Z',
    scanType: 'heart' as const,
    bodyPart: 'heart',
    deviceId: '3',
    aiAnalysis: {
      findings: [
        "Normal cardiac function",
        "Regular heart rhythm",
        "No abnormalities detected"
      ],
      confidence: 0.89,
      urgencyLevel: 'low' as const,
      recommendedActions: [
        "Routine follow-up in 6 months"
      ]
    }
  }
];

export function ScanHistory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Scan History</h1>
          <p className="mt-2 text-sm text-gray-700">View and manage previous scans</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search scans..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {historicalScans.map((scan) => (
          <ScanPreview key={scan.id} scan={scan} />
        ))}
      </div>
    </div>
  );
}