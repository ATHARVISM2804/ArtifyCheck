import React from 'react';
import { AlertCircle, Check } from 'lucide-react';
import type { AIAnalysis } from '../types';

interface AIAnalysisPanelProps {
  analysis: AIAnalysis | null;
  isLoading?: boolean;
}

export function AIAnalysisPanel({ analysis, isLoading }: AIAnalysisPanelProps) {
  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-gray-500">Upload an X-ray to see AI analysis</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">AI Analysis Results</h3>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {analysis.confidence > 0.8 ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-yellow-500" />
            )}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              Confidence Score: {(analysis.confidence * 100).toFixed(1)}%
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Findings:</h4>
          <ul className="space-y-2">
            {analysis.findings.map((finding, index) => (
              <li key={index} className="text-sm text-gray-600">
                • {finding}
              </li>
            ))}
          </ul>
        </div>

        {analysis.recommendedActions && analysis.recommendedActions.length > 0 && (
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Recommended Actions:</h4>
            <ul className="space-y-2">
              {analysis.recommendedActions.map((action, index) => (
                <li key={index} className="text-sm text-gray-600">
                  • {action}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}