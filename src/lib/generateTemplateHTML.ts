import dayjs from "dayjs";
import { join } from "path"
import { readFileSync } from "fs"
import { compile } from "handlebars"

import { ICreateCertificateDTO } from "../dtos/ICreateCertificateDTO"

export async function generateTemplateHTML(data: ICreateCertificateDTO): Promise<string> {
    const { id, name, grade } = data;

    const filePathTemplate = join(process.cwd(), "src", "templates", "certificate.hbs");
    const html = readFileSync(filePathTemplate, "utf-8");

    const medalPath = join(process.cwd(), "src", "templates", "medal.png");
    const medal = readFileSync(medalPath, "base64");

    const templateData = {
        id, 
        name,
        grade,
        medal,
        date: dayjs().format("DD/MM/YYYY")
    }

    return compile(html)(templateData)
}
