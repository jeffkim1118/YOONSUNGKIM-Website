import React from "react";
import pdf from "../images/resume.pdf"
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function Resume(){
    
    return(
        <div className="resume-section">
            <h2>Resume</h2>
            <div className="pdf-container">      
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdf} />  
                </Worker>
                <a href={pdf} type="button" class="btn btn-primary" target="_blank"  rel="noreferrer">View Resume</a>              
            </div>
        </div>
    )
}