import dayjs from "dayjs";

import { ICreateCertificateDTO } from "../dtos/ICreateCertificateDTO";
import { dynamodb } from "../utils/dynamodb-client"

export async function createUser(data: ICreateCertificateDTO): Promise<void> {
    const { id, name, grade } = data;
    
    await dynamodb.put({
        TableName: "users_certificate",
        Item: {
            id,
            name,
            grade,
            created_at: dayjs().format("DD/MM/YYYY HH:mm:ss")
        }
    }).promise();
}
