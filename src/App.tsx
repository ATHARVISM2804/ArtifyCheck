import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { NewScan } from './pages/NewScan';
import { Patients } from './pages/Patients';
import { ScanHistory } from './pages/ScanHistory';
import { Settings } from './pages/Settings';
import { DeviceStatus } from './components/DeviceStatus';
import { ScanPreview } from './components/ScanPreview';

function Dashboard() {
  const connectedDevices = [
    { id: '1', type: 'thermal', status: 'online' },
    { id: '2', type: 'xray', status: 'online' },
    { id: '3', type: 'heart', status: 'offline' }
  ];

  const recentScans = [
    {
      id: '1',
      patientId: 'P001',
      imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
      scanDate: new Date().toISOString(),
      scanType: 'xray' as const,
      bodyPart: 'chest',
      deviceId: '2',
      aiAnalysis: {
        findings: [
          "Normal cardiac silhouette",
          "Clear lung fields",
          "No pleural effusions"
        ],
        confidence: 0.95,
        urgencyLevel: 'low' as const,
        recommendedActions: [
          "No immediate action required",
          "Routine follow-up in 1 year"
        ]
      }
    },
    {
      id: '2',
      patientId: 'P002',
      imageUrl: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80',
      scanDate: new Date().toISOString(),
      scanType: 'heart' as const,
      bodyPart: 'heart',
      deviceId: '3',
      aiAnalysis: {
        findings: [
          "Normal heart size and function",
          "Regular cardiac rhythm",
          "No abnormalities detected"
        ],
        confidence: 0.88,
        urgencyLevel: 'low' as const,
        recommendedActions: [
          "Routine follow-up in 6 months"
        ]
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Medical Imaging Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          New Scan
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Scans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentScans.map((scan) => (
              <ScanPreview key={scan.id} scan={scan} />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <DeviceStatus devices={connectedDevices} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/scan" element={<NewScan />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/history" element={<ScanHistory />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;