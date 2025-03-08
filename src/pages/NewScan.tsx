import React, { useState } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { XRayUploader } from '../components/XRayUploader';
import { AIAnalysisPanel } from '../components/AIAnalysisPanel';
import type { AIAnalysis } from '../types';

export function NewScan() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = async (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis({
        findings: [
          "No acute cardiopulmonary process",
          "Normal heart size and mediastinal contours",
          "Clear lungs without focal consolidation"
        ],
        confidence: 0.95,
        urgencyLevel: 'low',
        recommendedActions: [
          "No immediate action required",
          "Routine follow-up in 1 year"
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">New Scan</h1>
        <p className="mt-2 text-sm text-gray-600">Upload a new X-ray or capture from connected devices</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Image Upload</h2>
            {selectedImage ? (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Uploaded scan"
                  className="w-full rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <XRayUploader onUpload={handleImageUpload} />
            )}
          </div>

          <div className="mt-6 bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Capture from Device</h2>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Camera className="h-5 w-5 mr-2" />
              Capture from Connected Device
            </button>
          </div>
        </div>

        <div>
          <AIAnalysisPanel analysis={analysis} isLoading={isAnalyzing} />
        </div>
      </div>
    </div>
  );
}