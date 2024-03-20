import React from 'react';

export default function UploadButton({ children, className, onChange }) {
  return (
    <label className={`bg-white justify-center text-center flex items-center text-[#D8242F] border-2 border-[#D8242F] rounded-full ${className}`}>
      {children}
      <input
        type="file"
        className="hidden"
        onChange={onChange}
      />
    </label>
  );
}
