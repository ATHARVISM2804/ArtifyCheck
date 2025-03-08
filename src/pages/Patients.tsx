import React from 'react';
import { Users, Search, Plus } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
  scanCount: number;
}

const patients: Patient[] = [
  {
    id: "P001",
    name: "John Smith",
    age: 45,
    gender: "Male",
    lastVisit: "2024-03-15",
    scanCount: 3
  },
  {
    id: "P002",
    name: "Sarah Johnson",
    age: 32,
    gender: "Female",
    lastVisit: "2024-03-14",
    scanCount: 2
  }
];

export function Patients() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Patients</h1>
          <p className="mt-2 text-sm text-gray-700">Manage and view patient records</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Patient
        </button>
      </div>

      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search patients..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">ID</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Age</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Gender</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Last Visit</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Scans</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {patients.map((patient) => (
                    <tr key={patient.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                        {patient.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{patient.id}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{patient.age}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{patient.gender}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {new Date(patient.lastVisit).toLocaleDateString()}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{patient.scanCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}