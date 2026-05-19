'use client';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[400px] font-sans">
      Loading map...
    </div>
  ),
});

export default function ClientMap() {
  return <MapComponent />;
}
