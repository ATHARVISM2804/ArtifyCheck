import React from 'react';
import { WifiOff, Wifi, Thermometer, Heart, Settings as Lungs } from 'lucide-react';

interface DeviceStatusProps {
  devices: {
    id: string;
    type: 'thermal' | 'xray' | 'heart';
    status: 'online' | 'offline';
    lastSeen?: string;
  }[];
}

export function DeviceStatus({ devices }: DeviceStatusProps) {
  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'thermal':
        return <Thermometer className="h-5 w-5" />;
      case 'heart':
        return <Heart className="h-5 w-5" />;
      case 'xray':
        return <Lungs className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Connected Devices</h2>
      <div className="space-y-4">
        {devices.map((device) => (
          <div key={device.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {getDeviceIcon(device.type)}
              <span className="text-sm font-medium text-gray-900">
                {device.type.charAt(0).toUpperCase() + device.type.slice(1)} Scanner
              </span>
            </div>
            <div className="flex items-center">
              {device.status === 'online' ? (
                <>
                  <Wifi className="h-4 w-4 text-green-500" />
                  <span className="ml-2 text-sm text-green-500">Online</span>
                </>
              ) : (
                <>
                  <WifiOff className="h-4 w-4 text-red-500" />
                  <span className="ml-2 text-sm text-red-500">Offline</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}