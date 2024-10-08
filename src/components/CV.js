import React, { useState, useEffect } from 'react';

const CV = () => {
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    // Dynamically determine the correct URL for the PDF
    const url = new URL(window.location.href);
    const baseUrl = `${url.protocol}//${url.hostname}${url.port ? ':' + url.port : ''}`;
    setPdfUrl(`${baseUrl}/CV.pdf`);
  }, []);

  return (
    <div>
      <h3>Curriculum Vitae</h3>
      {pdfUrl && (
        <object
          data={pdfUrl}
          type="application/pdf"
          width="100%"
          height="800px"
          style={{ border: '1px solid #ccc' }}
        >
          <p>It appears you don't have a PDF plugin for this browser. You can 
          <a href={pdfUrl} download="AMusto_CV.pdf"> download the PDF </a> 
          to view it.</p>
        </object>
      )}
      <p>
        <a href={pdfUrl} download="AMusto_CV.pdf">Download CV</a>
      </p>
    </div>
  );
};

export default CV;