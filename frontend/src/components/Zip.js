// src/components/FileUploadForm.js

import React, { useRef } from "react";
import "../styles/Zip.css";

function FileUploadForm({baseUrl}) {
  const fileInputRef = useRef(null);
  const [response, setResponse] = React.useState(null);

  const handleSubmit = async (event) => {

    event.preventDefault();
    setResponse("loading");
    // Ensure a file was selected
    if (!fileInputRef.current.files.length) {
      alert("Please select a zip file.");
      return;
    }

    const file = fileInputRef.current.files[0];

    // Create a FormData object to hold the file data
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Modify the URL below to your backend endpoint
      const response = await fetch(
        baseUrl,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(response);
      const responseData = await response.json();
      console.log(responseData);
      setResponse(JSON.parse(responseData[1].content).vulnerabilities);
      alert("File uploaded successfully!"); // Handle the response data as needed
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mt-8 max-w-sm justify-center items-center mx-auto"
      >
        <label htmlFor="zipFile" className="file-upload-label">
          Select the ZIP archive containing the SRC subfolder of your smart
          contract project
          <input
            type="file"
            id="zipFile"
            name="zipFile"
            accept=".zip"
            className="file-input"
            ref={fileInputRef}
          />
        </label>
        <button type="submit" className="upload-btn">
          Upload
        </button>
        
      </form>
      {response === "loading" && (
        <div className="flex justify-center items-center">
          <div className="loader"></div>
        </div>
      )}
      {response &&  response !== "loading" && (
        <div className="flex flex-col items-center ">
          {response.map((v, i) => {
            return (
            <div className="border border-black rounded-md p-2 my-4 max-w-[700px] flex flex-col gap-2 items-left justify-left">
              <h1 className="mb-4">Vulnerability {i}</h1>
              <h2>Description: {v.description}</h2>
              <h2>Misuse Scenario: {v.misuse_scenario}</h2>
              <h2>Solution: {v.solution}</h2>
              <h2>Possible Code Implementation: {v.possible_code_implementation}</h2>
            </div>
            )
          })}
        </div>
      )}
    </div>
  );
}

export default FileUploadForm;
