import React from 'react';

const Bruno = ({ width }) => {
  return (
    <svg width={width} viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
      {/* Base platform */}
      <rect x="13" y="62" width="23" height="9" rx="1" fill="#F5A623" />
      <rect x="36" y="62" width="23" height="9" rx="1" fill="#E07830" />

      {/* Lower tower body */}
      <rect x="19" y="33" width="34" height="29" rx="2" fill="#E8B896" />

      {/* Lower dark band */}
      <rect x="15" y="31" width="42" height="4" rx="2" fill="#3D4F5F" />

      {/* Middle tower */}
      <rect x="25" y="16" width="22" height="17" rx="2" fill="#E8B896" />

      {/* Upper dark band */}
      <rect x="21" y="14" width="30" height="4" rx="2" fill="#3D4F5F" />

      {/* Top turret */}
      <rect x="30" y="5" width="12" height="11" rx="1" fill="#E8B896" />

      {/* Blue gem at top */}
      <polygon points="36,1 39,6 33,6" fill="#4A90D9" />

      {/* Windows - lower section row 1 */}
      <rect x="23" y="36" width="3.5" height="6" rx="1" fill="#C0886A" />
      <rect x="29" y="36" width="3.5" height="6" rx="1" fill="#C0886A" />
      <rect x="34.5" y="36" width="3.5" height="6" rx="1" fill="#C0886A" />
      <rect x="40" y="36" width="3.5" height="6" rx="1" fill="#C0886A" />
      <rect x="45.5" y="36" width="3.5" height="6" rx="1" fill="#C0886A" />

      {/* Windows - lower section row 2 */}
      <rect x="23" y="45" width="3.5" height="6" rx="1" fill="#C0886A" />
      <rect x="29" y="45" width="3.5" height="6" rx="1" fill="#C0886A" />
      <rect x="34.5" y="45" width="3.5" height="6" rx="1" fill="#C0886A" />
      <rect x="40" y="45" width="3.5" height="6" rx="1" fill="#C0886A" />
      <rect x="45.5" y="45" width="3.5" height="6" rx="1" fill="#C0886A" />

      {/* Windows - lower section row 3 */}
      <rect x="23" y="54" width="3.5" height="5" rx="1" fill="#C0886A" />
      <rect x="29" y="54" width="3.5" height="5" rx="1" fill="#C0886A" />
      <rect x="34.5" y="54" width="3.5" height="5" rx="1" fill="#C0886A" />
      <rect x="40" y="54" width="3.5" height="5" rx="1" fill="#C0886A" />
      <rect x="45.5" y="54" width="3.5" height="5" rx="1" fill="#C0886A" />

      {/* Windows - middle section */}
      <rect x="29" y="20" width="3.5" height="5" rx="1" fill="#C0886A" />
      <rect x="34.5" y="20" width="3.5" height="5" rx="1" fill="#C0886A" />
      <rect x="40" y="20" width="3.5" height="5" rx="1" fill="#C0886A" />
    </svg>
  );
};

export default Bruno;
