import React, { useState } from 'react';
import axios from 'axios';
import XmlSubmit from './XmlSubmit';
import "./Esign.css";
import { set } from 'lodash';


function ESignForm() {
  const [pdfFile, setPdfFile] = useState(null);
  const [nameShowSignature, setNameShowSignature] = useState('');
  const [locationShowSignature, setLocationShowSignature] = useState('');
  const [reasonForSignature, setReasonForSignature] = useState('');
  const [choiceOption, setChoiceOption] = useState('');
  const [pageOptions, setPageOptions] = useState('');
  const [signatureStampPage, setSignatureStampPage] = useState('');
  const [error, setError] = useState({});
  const [showStampPageInput, setShowStampPageInput] = useState(false);
  const [xmlResponse, setXmlResponse] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true)

    if (!pdfFile) {
      setError('Please upload a PDF file.');
      setLoading(false);
      return;
    }

   
    const formData = new FormData();
    formData.append('pdf_file', pdfFile);
    formData.append('name_show_signature', nameShowSignature);
    formData.append('location_show_signature', locationShowSignature);
    formData.append('reasone_for_signature', reasonForSignature);
    formData.append('choice_option', choiceOption);
    formData.append('page_options', pageOptions);
    formData.append('signature_stamp_page', signatureStampPage);

    if (pdfFile) {
      const fileNameWithoutExtension = pdfFile.name.replace('.pdf', '');
    localStorage.setItem('pdfFileName', fileNameWithoutExtension); 
    }


    const domain = localStorage.getItem('domain');
    try {
      const response = await axios.post(`${domain}/esign-xml`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

    
      console.log('xml: ',response.data.xml);
      setXmlResponse(response.data.xml);
      setLoading(false);
      setIsModalOpen(true);
      console.log(xmlResponse);
    } catch (err) {
      setLoading(false);
   
      if (err.response) {
        console.error('Error response:', err.response);
        setError('Error occurred while sending the request.');
      } else {
        console.error('Error:', err);
        setError('Error occurred while sending the request.');
      }
    }
  };


  const handlePdfChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

 
  const handlePageOptionsChange = (e) => {
    setPageOptions(e.target.value);
    if (e.target.value === 'single') {
      setShowStampPageInput(true);
    } else {
      setShowStampPageInput(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  return (
    <div className={`flex justify-center items-center min-h-screen text-black ${isModalOpen ? '' : 'py-8'}`}>
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg ${isModalOpen ? '' : 'space-y-4' }`}
      >
        <h1 className="text-center text-4xl text-cyan-400 mb-4">E-Sign</h1>
        
        <div>
          <label className="block text-lg text-white">Upload Sample PDF File <span className="text-red-500">*</span></label>
          <input
            type="file"
            className="w-full mt-2 p-2 border border-gray-300 rounded text-white"
            onChange={handlePdfChange}
          />
          {error.pdfFile && <p className="text-red-500 text-sm">{error.pdfFile}</p>}
        </div>

        <div>
          <label className="block text-lg text-white">Name for Signature <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={nameShowSignature}
            onChange={(e) => setNameShowSignature(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
          {error.nameShowSignature && <p className="text-red-500 text-sm">{error.nameShowSignature}</p>}
        </div>

        <div>
          <label className="block text-lg text-white">Location for Signature <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={locationShowSignature}
            onChange={(e) => setLocationShowSignature(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
          {error.locationShowSignature && <p className="text-red-500 text-sm">{error.locationShowSignature}</p>}
        </div>

        <div>
          <label className="block text-lg text-white">Reason for Signature <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={reasonForSignature}
            onChange={(e) => setReasonForSignature(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
          {error.reasonForSignature && <p className="text-red-500 text-sm">{error.reasonForSignature}</p>}
        </div>

        <div>
          <label className="block text-lg text-white">Choose Option <span className="text-red-500">*</span></label>
          <select
            value={choiceOption}
            onChange={(e) => setChoiceOption(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          >
            <option value="">Select Option</option>
            <option value="one">E-Sign</option>
          </select>
          {error.choiceOption && <p className="text-red-500 text-sm">{error.choiceOption}</p>}
        </div>

        <div>
          <label className="block text-lg text-white">Page Options <span className="text-red-500">*</span></label>
          <select
            value={pageOptions}
            onChange={handlePageOptionsChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          >
            <option value="">Select Page Method</option>
            <option value="single">Single Page</option>
            <option value="all">All Pages</option>
          </select>
          {error.pageOptions && <p className="text-red-500 text-sm">{error.pageOptions}</p>}
        </div>

        {showStampPageInput && (
          <div>
            <label className="block text-lg text-white">Signature Stamp Insert Page Number <span className="text-red-500">*</span></label>
            <input
              type="number"
              value={signatureStampPage}
              onChange={(e) => setSignatureStampPage(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
              min="1"
            />
            {error.signatureStampPage && <p className="text-red-500 text-sm">{error.signatureStampPage}</p>}
          </div>
        )}

        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-cyan-400 text-black rounded hover:bg-cyan-500"
        >
          {/* Submit */}
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="loader"></div>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>

      {isModalOpen &&
      <div className='absolute bg-gray-800 bg-opacity-90 min-h-screen w-full'>
       
        <XmlSubmit xmlResponse={xmlResponse} /> 
        </div>
      }
      
    </div>
  );
}

export default ESignForm;
