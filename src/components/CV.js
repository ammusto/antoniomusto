import React from 'react';

const CV = () => {
  const pdfUrl = `${process.env.PUBLIC_URL}/cv.pdf`;

  return (
    <div>
      <h3>Curriculum Vitae</h3>
      <iframe 
        src={pdfUrl} 
        title="CV"
        style={{ width: '100%', height: '800px' }}
      />
      <p>
        <a href={pdfUrl} download="My_CV.pdf">Download CV</a>
      </p>
    </div>
  );
};

export default CV;
