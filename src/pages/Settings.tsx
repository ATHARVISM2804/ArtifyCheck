import React, { useState } from 'react';
import { Settings as SettingsIcon, Shield, Bell, Database, Users, Wifi } from 'lucide-react';

export function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [autoConnect, setAutoConnect] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-2 text-sm text-gray-700">Manage your application preferences and configurations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-blue-500 mr-3" />
            <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </div>
              <button className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm">Enable</button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Session Management</p>
                <p className="text-sm text-gray-500">Manage your active sessions</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm">View Sessions</button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Bell className="h-6 w-6 text-blue-500 mr-3" />
            <h2 className="text-lg font-medium text-gray-900">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-500">Receive scan results via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Database className="h-6 w-6 text-blue-500 mr-3" />
            <h2 className="text-lg font-medium text-gray-900">Data Management</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Data Retention</p>
                <p className="text-sm text-gray-500">Configure how long to keep scan data</p>
              </div>
              <select className="block w-32 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
                <option>1 year</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Wifi className="h-6 w-6 text-blue-500 mr-3" />
            <h2 className="text-lg font-medium text-gray-900">Device Settings</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Auto-Connect Devices</p>
                <p className="text-sm text-gray-500">Automatically connect to known devices</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={autoConnect}
                  onChange={(e) => setAutoConnect(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}