export const FileIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg 
    width={size} 
    height={size}
    viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path stroke={color} d="M13.5 2H10V0H3C2.4 0 2 0.4 2 1V15C2 15.6 2.4 16 3 16H13C13.6 16 14 15.6 14 15V3.5L13.5 2Z" fill="currentColor" />
  </svg>
);