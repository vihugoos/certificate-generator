import chromium from "chrome-aws-lambda"

export async function convertToPDF(template_html: string): Promise<Buffer> {
    const browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath
    });
    
    const page = await browser.newPage();
    
    await page.setContent(template_html);
    
    const pdf = await page.pdf({
        format: "a4",
        landscape: true,
        printBackground: true,
        preferCSSPageSize: true,
        path: process.env.IS_OFFLINE ? "./certificate.pdf" : null
    });
    
    await browser.close();

    return pdf;
}
