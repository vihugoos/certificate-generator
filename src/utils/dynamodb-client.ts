import { DynamoDB } from "aws-sdk"

const options = {
    regions: "localhost",
    endpoint: "http://localhost:8000",
    accessKeyId: "x",
    secretAccessKey: "x"
}

export const dynamodb = process.env.IS_OFFLINE 
    ? new DynamoDB.DocumentClient(options) 
    : new DynamoDB.DocumentClient();
