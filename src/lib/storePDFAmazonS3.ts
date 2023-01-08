import { S3 } from "aws-sdk"

export async function storePDFAmazonS3(id: string, pdf: Buffer): Promise<void> {
    const s3 = new S3();

    await s3.putObject({
        Bucket: "stored-certificates",
        Key: `${id}.pdf`,
        ACL: "public-read",
        Body: pdf,
        ContentType: "application/pdf" 
    }).promise();
}
