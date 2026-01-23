import React from 'react'

function Homes() {
return (
    <div className="flex flex-row items-center gap-6">
      <div className="text-sm font-semibold cursor-pointer hover:text-rose-500">
        Stays
      </div>
      <div className="text-sm font-semibold cursor-pointer hover:text-rose-500">
        Experiences
      </div>
      <div className="text-sm font-semibold cursor-pointer hover:text-rose-500">
        Online Experiences
      </div>
    </div>
  );
}

export default Homes
