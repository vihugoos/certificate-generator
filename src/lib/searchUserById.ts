import { dynamodb } from "../utils/dynamodb-client"

interface IUser {
    name: string;
    id: string;
    grade: string;
    created_at: string;
}

export async function searchUserById(id: string): Promise<IUser> {
    const user = await dynamodb.query({
        TableName: "users_certificate",
        KeyConditionExpression: "id = :id",
        ExpressionAttributeValues: { ":id": id }
    }).promise();

    if (!user.Items[0]) {
        return null;
    }

    return user.Items[0] as IUser;
}
