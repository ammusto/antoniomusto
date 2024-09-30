import React from 'react';

const CV = () => {
  return (
    <div>
      <h3>Curriculum Vitae</h3>
      <iframe 
        src="/cv.pdf" 
        title="CV"
        style={{ width: '100%', height: '800px' }}
      />
      <p>
        <a href="/cv.pdf" download="My_CV.pdf">Download CV</a>
      </p>
    </div>
  );
};

export default CV;
