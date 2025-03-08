import React from 'react';
import { AlertCircle, Check, Clock } from 'lucide-react';
import type { ScanResult } from '../types';

interface ScanPreviewProps {
  scan: ScanResult;
}

export function ScanPreview({ scan }: ScanPreviewProps) {
  const getUrgencyColor = (level?: string) => {
    switch (level) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative">
        <img
          src={scan.imageUrl}
          alt={`${scan.scanType} scan`}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
          {scan.scanType.toUpperCase()}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {scan.aiAnalysis?.confidence && scan.aiAnalysis.confidence > 0.8 ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-yellow-500" />
            )}
            <span className="ml-2 text-sm font-medium">
              Confidence: {((scan.aiAnalysis?.confidence || 0) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="ml-1 text-sm text-gray-500">
              {new Date(scan.scanDate).toLocaleDateString()}
            </span>
          </div>
        </div>

        {scan.aiAnalysis?.findings && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-900">Key Findings:</h4>
            <ul className="text-sm text-gray-600">
              {scan.aiAnalysis.findings.slice(0, 2).map((finding, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        )}

        {scan.aiAnalysis?.urgencyLevel && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center">
              <span className="text-sm font-medium">Urgency:</span>
              <span className={`ml-2 text-sm font-medium ${getUrgencyColor(scan.aiAnalysis.urgencyLevel)}`}>
                {scan.aiAnalysis.urgencyLevel.toUpperCase()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}