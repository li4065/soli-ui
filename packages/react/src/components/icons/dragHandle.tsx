export const DragHandleIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg
    width={size} 
    height={size}  
    viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M4 10H12" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);