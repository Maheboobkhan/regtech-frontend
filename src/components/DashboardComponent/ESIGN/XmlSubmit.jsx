import React, { useEffect, useRef } from 'react';

const XmlSubmit = ({ xmlResponse }) => {
  const formRef = useRef(null);

  const handleSubmit = () => {
    console.log('requestXml2: ',xmlResponse);
    formRef.current.submit();
    
  };

  useEffect(()=>{
    console.log('requestXml: ',xmlResponse);
  })

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-xl rounded-lg max-w-md w-full p-8">
        <form
          ref={formRef}
          id="urlForm"
          name="URL"
          method="POST"
          encType="multipart/form-data"
          action="https://pregw.esign.egov-nsdl.com/nsdl-esp/authenticate/esign-doc/"
        >
          
          <div className="text-center mb-6">
            <label className="text-2xl font-semibold text-gray-800">Please confirm</label>
          </div>

          
          <input type="hidden" name="msg" value={xmlResponse} />

          
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-teal-500 text-white hover:bg-teal-600 py-2 px-6 rounded-full text-lg transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default XmlSubmit;
