var reportPath = path.join(__dirname, '__pdf-snapshots');
var actualInvoice = path.join(reportPath, 'actual.pdf');
var expectedInvoice = path.join(reportPath, 'expected.pdf');



describe('pdf regression test', () => {

    it('visual comparison of two PDFs', function () {

        // fetch actual pdf
        await getPdf();

        // compare snapshot of actual and expected pdfs
        await snapshot();


    })
})



const getPdf = async (id) => {
    const reportUrl = 'https://stage.livoneo.de/scripts/cypress/pdf/invoices/Rechnung_100002727.pdf';

    await download(reportUrl, actualInvoice);
};



const snapshot = async () => {
    if (process.env.UPDATE || !(await exists(expectedInvoice))) {
        await fs.createReadStream(actualInvoice).pipe(fs.createWriteStream(expectedInvoice));
    } else {
        const helpText = [
            'Actual contents of PDF did not match expected contents.',
            'To see comparison of the expected and actual PDFs, run:',
            `compare -metric AE ${expectedInvoice} ${actualInvoice} /tmp/comparison.pdf; open ${expectedInvoice} ${actualInvoice} /tmp/comparison.pdf`,
        ].join('\n\n');

        return expect(await isPdfPageEqual(expectedInvoice, 0, actualInvoice, 0), helpText).to.be.true;
    }
};



//const isPdfPageEqual = (a: string, aPage: number, b: string, bPage: number) => {
const isPdfPageEqual = (a, aPage, b, bPage) => {
    return new Promise((fulfill, reject) => {
        gm.compare(`${a}[${aPage}]`, `${b}[${bPage}]`, {  //We simply call the compare function of the GraphicsMagick Node module/wrapper.
            tolerance: 0,    // We don’t want to allow anything except a very precise comparison, which is why the tolerance level is set to 0
        }, (err, isEqual, equality) => {
            if (err) {
                reject(err);
            }

            fulfill(isEqual);
        });
    });
};


