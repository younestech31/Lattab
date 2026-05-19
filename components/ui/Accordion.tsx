'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
    headerExtra?: React.ReactNode;
  }[];
  allowMultiple?: boolean;
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  initialOpenIndex?: number | null;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
  itemClassName,
  titleClassName,
  contentClassName,
  initialOpenIndex = null,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    initialOpenIndex !== null ? [initialOpenIndex] : []
  );

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className={cn(
              'bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 transition-all',
              isOpen ? 'ring-2 ring-emerald-500' : '',
              itemClassName
            )}
          >
            <button
              onClick={() => toggleItem(index)}
              className={cn(
                'w-full flex items-center justify-between p-6 text-right transition-colors',
                titleClassName
              )}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                {item.icon && (
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                    isOpen ? "bg-emerald-100 text-emerald-600" : "bg-emerald-50 text-emerald-600"
                  )}>
                    {item.icon}
                  </div>
                )}
                <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
              </div>
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 transition-all',
                  isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                )}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <div
              className={cn(
                'grid transition-[grid-template-rows] duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <div className={cn('px-6 pb-6', contentClassName)}>
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
