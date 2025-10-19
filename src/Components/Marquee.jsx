import React from 'react';

const Marquee = () => {
  const handleMouseOver = (e) => e.target.stop();
  const handleMouseOut = (e) => e.target.start();

  return (
    <div>
      <marquee
        className="ticker bg-blue-100 text-blue-950 pb-0 mb-0"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        scrollamount="10"
      >
        Final result of Civilian Batch A-2025 has been uploaded &nbsp;&nbsp; | &nbsp;&nbsp;
        Final result of Sailor Batch A-2025 has been uploaded. &nbsp;&nbsp; | &nbsp;&nbsp;
        Entrance Test Result of SSC 2025-B is uploaded online. &nbsp;&nbsp; | &nbsp;&nbsp;
        Important Announcement: Candidates shortlisted for Sailor Batch A-2025 will not be considered as REPEATER for Sailor Batch B-2025. They are to appear in Entrance Test of Sailor Batch B-2025. &nbsp;&nbsp; | &nbsp;&nbsp;
        Entrance Test Result of Sailor Batch B-2025 has been uploaded. &nbsp;&nbsp; | &nbsp;&nbsp;
      </marquee>
    </div>
  );
};

export default Marquee;
