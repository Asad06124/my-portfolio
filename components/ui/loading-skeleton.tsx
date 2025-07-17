import React from 'react';

interface LoadingSkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ width = '100%', height = 24, className = '', style }) => (
  <div
    className={`animate-pulse bg-gray-300 dark:bg-gray-700 rounded-md ${className}`}
    style={{ width, height, ...style }}
    aria-busy="true"
    aria-label="Loading..."
  />
);

export default LoadingSkeleton; 