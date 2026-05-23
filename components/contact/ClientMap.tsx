'use client';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center text-gray-400 text-sm font-medium gap-3">
      <div className="w-5 h-5 border-2 border-gray-300 border-t-emerald-500 rounded-full animate-spin" />
      <span>Loading Map...</span>
    </div>
  ),
});

export default function ClientMap() {
  return <MapComponent />;
}
