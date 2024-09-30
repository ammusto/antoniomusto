import React from 'react';

const CV = () => {
  return (
    <div>
      <h2>Curriculum Vitae</h2>
      <iframe 
        src="/cv.pdf" 
        title="CV"
        style={{ width: '100%', height: '500px' }}
      />
      <p>
        <a href="/cv.pdf" download="My_CV.pdf">Download CV</a>
      </p>
    </div>
  );
};

export default CV;
