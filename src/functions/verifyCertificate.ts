import { APIGatewayProxyHandler } from "aws-lambda"

import { searchUserById } from "../lib/searchUserById";

export const handler: APIGatewayProxyHandler = async (event) => {
    const { id } = event.pathParameters;

    const userCertificate = await searchUserById(id);

    if (!userCertificate) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Invalid certificate!"
            })
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Valid Certificate!",
            id: id,
            name: userCertificate.name,
            url: `https://stored-certificates.s3.sa-east-1.amazonaws.com/${id}.pdf`
        })
    }
}
