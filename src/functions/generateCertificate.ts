import { APIGatewayProxyHandler } from "aws-lambda"

import { searchUserById } from "../lib/searchUserById"
import { ICreateCertificateDTO } from "../dtos/ICreateCertificateDTO"
import { generateTemplateHTML } from "../lib/generateTemplateHTML"
import { convertToPDF } from "../lib/convertToPDF"
import { storePDFAmazonS3 } from "../lib/storePDFAmazonS3"
import { createUser } from "../lib/createUser"

export const handler: APIGatewayProxyHandler = async (event) => {
    const { id, name, grade } = JSON.parse(event.body) as ICreateCertificateDTO

    const userAlreadyExists = await searchUserById(id);

    if (userAlreadyExists) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: "The certificate for the user already exists."
            })
        }
    }

    createUser({ id, name, grade });

    const templateHTML = await generateTemplateHTML({ id, name, grade} );

    const pdf = await convertToPDF(templateHTML);

    storePDFAmazonS3(id, pdf);

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Certificate created successfully!",
            url: `https://stored-certificates.s3.sa-east-1.amazonaws.com/${id}.pdf`
        })
    }
}
