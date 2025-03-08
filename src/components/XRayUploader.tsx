import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

export function XRayUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log('Files uploaded:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.dicom']
    },
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-indigo-500 transition-colors cursor-pointer"
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-4 text-lg font-medium text-gray-900">
        {isDragActive ? 'Drop the X-ray image here' : 'Drag & drop an X-ray image, or click to select'}
      </p>
      <p className="mt-2 text-sm text-gray-500">Supports DICOM, PNG, and JPEG formats</p>
    </div>
  );
}