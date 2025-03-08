import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Layout, Users, History, Settings, Camera } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ArtifyCheck</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <Layout className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
              <Link
                to="/scan"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <Camera className="h-4 w-4 mr-2" />
                New Scan
              </Link>
              <Link
                to="/patients"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <Users className="h-4 w-4 mr-2" />
                Patients
              </Link>
              <Link
                to="/history"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <History className="h-4 w-4 mr-2" />
                Scan History
              </Link>
              <Link
                to="/settings"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}