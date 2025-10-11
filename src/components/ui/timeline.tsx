'use client';

import React from 'react';

interface TimelineItemProps {
  children: React.ReactNode;
  date: string;
}

const TimelineItem = ({ children, date }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 h-full w-px bg-gray-200 dark:bg-gray-800"></div>
      <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-blue-500"></div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</div>
      <div className="bg-white dark:bg-neutral-900 rounded-lg">
        {children}
      </div>
    </div>
  );
};

interface TimelineProps {
  children: React.ReactNode;
}

interface TimelineComponent extends React.FC<TimelineProps> {
  Item: React.FC<TimelineItemProps>;
}

const Timeline: TimelineComponent = Object.assign(
  ({ children }: TimelineProps) => {
    return <div className="relative">{children}</div>;
  },
  { Item: TimelineItem }
);

export { Timeline };
