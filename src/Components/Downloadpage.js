import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

const Downloadpage = ({ rootElementId, downloadFileName }) => {

    let navigate = useNavigate();
    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p", "px", "a1")
            pdf.addImage(imgData, "JPEG", 10, 50)
            pdf.save(`${downloadFileName}`)

            alert("downloaded")
            // toast.success("Payment Successful")
            navigate("/bill")
        })
    }
    return (
        <div>
            <button className="btn btn-outline-success btn-lg px-5" onClick={downloadFileDocument}>Print Invoice</button>
        </div>
    )
}

export default Downloadpage;