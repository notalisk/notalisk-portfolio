import pdf from '../assets/EllenKolblyResume.pdf';

function Resume() {
    return (
        <div className='pdfResume'>
            <object data={pdf} type="application/pdf" width="100%" height="100%"></object>
        </div>
    );
}

export default Resume;