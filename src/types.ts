export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  studyDate: string;
}

export interface ScanResult {
  id: string;
  patientId: string;
  imageUrl: string;
  scanDate: string;
  scanType: 'xray' | 'thermal' | 'heart';
  bodyPart: string;
  deviceId: string;
  aiAnalysis?: AIAnalysis;
}

export interface AIAnalysis {
  findings: string[];
  confidence: number;
  abnormalityLocations?: { x: number; y: number; description: string }[];
  vitalSigns?: {
    temperature?: number;
    heartRate?: number;
    respiratoryRate?: number;
  };
  recommendedActions?: string[];
  urgencyLevel?: 'low' | 'medium' | 'high';
}