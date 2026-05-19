import React from 'react';

export const CalculatorSkeleton = () => (
  <div className="animate-pulse space-y-8 w-full max-w-4xl mx-auto" dir="rtl">
    {/* Mode Toggle Skeleton */}
    <div className="h-14 bg-gray-200 rounded-2xl max-w-md mx-auto" />
    
    <div className="grid md:grid-cols-2 gap-8">
      {/* Form Section Skeleton */}
      <div className="space-y-6">
        {/* Wilaya, Region, Category, Type, Zone, Area */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-14 bg-gray-200 rounded-xl w-full" />
          </div>
        ))}
      </div>
      
      {/* Result Section Skeleton */}
      <div className="h-[400px] bg-gray-200 rounded-3xl w-full" />
    </div>
    
    {/* Disclaimer Skeleton */}
    <div className="h-24 bg-gray-200 rounded-xl w-full" />
  </div>
);

export default CalculatorSkeleton;
