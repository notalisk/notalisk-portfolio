import pdf from '../assets/EllenKolblyResume.pdf';

function Resume() {
    return (
        <div>
            <object data={pdf} type="application/pdf" width="100%" height="100%"></object>
        </div>
    );
}

export default Resume;