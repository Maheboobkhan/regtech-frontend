import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const PanCardOCR = () => {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setError('Please select a file');
            return;
        }
        const token = Cookies.get('authToken');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('file_type', 'pancard');

        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const result = await axios.post('http://regtechapi.in/api/seachv4', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'AccessToken': token // Replace 'token' with the actual token
                }
            });
            console.log(result)
            setResponse(result.data);
        } catch (err) {
            setError(err.response ? err.response.data.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
            <div className="mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-[#00acc1] p-4">
                    <h3 className="text-xl font-semibold text-white">PAN CARD OCR</h3>
                </div>
                <div className="p-4">
                    {loading && (
                        <div className="flex justify-center items-center mb-4">
                            <div className="text-xl text-blue-300">
                                Uploading file <span className="text-blue-300">please wait...</span>
                            </div>
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-500 text-white p-3 rounded mb-4">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="mt-4" encType="multipart/form-data">
                        <div className="mb-4">
                            <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
                                PAN Card Image
                            </label>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                onChange={handleFileChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                        >
                            Verify
                        </button>
                    </form>
                    {response && response.status_code === 200 && (
                        <div className="bg-green-400 text-white p-3 rounded mt-4">
                            <h3 className="text-lg font-semibold">PAN CARD Details</h3>
                            <p><strong>Pan Description: </strong>
                                {response.pancard.raw_ocr_texts ? response.pancard.raw_ocr_texts.join(', ') : "null"}
                            </p>
                            <p><strong>Name: </strong>
                                {response.pancard.name || 'null'}
                            </p>
                            <p><strong>Date Of Birth: </strong>
                                {response.pancard.date_of_birth || 'null'}
                            </p>
                            <p><strong>Pan Number: </strong>
                                {response.pancard.pan_number || 'null'}
                            </p>
                        </div>
                    )}
                    {response && response.status_code === 102 && (
                        <div className="bg-red-500 text-white p-3 rounded mt-4">
                            Invalid file type, must be a PAN card image.
                        </div>
                    )}
                    {response && response.status_code === 404 && (
                        <div className="bg-red-500 text-white p-3 rounded mt-4">
                            No file provided.
                        </div>
                    )}
                    {response && response.status_code === 500 && (
                        <div className="bg-red-500 text-white p-3 rounded mt-4">
                            Internal Server Error. Please contact techsupport@docboyz.in for more details.
                        </div>
                    )}
                </div>
            </div>
    );
};

export default PanCardOCR;