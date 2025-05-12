//submission for pdf generation
const btn = document.getElementById("submit");

//Make jsPDF globally available

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    doc.text(month+" "+year, 10, 10);
    doc.save("example.pdf");
});

export class PDFGenerator{
    constructor(){
        const { jsPDF } = window.jspdf;
        this.doc = new jsPDF();  
    }
}