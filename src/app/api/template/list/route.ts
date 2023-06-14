import { NextResponse, NextRequest } from 'next/server';
import { pool } from '@/utils/mysql';
import { WebUITemplate } from '@/domain/apiData/WebUITemplate';
import { IWebUITemplateEntity } from '@/domain/entities/WebUITemplateEntity';
 
export async function GET(req: NextRequest) {
  const results: Array<any> = await pool.query('SELECT * FROM webui_templates');
  await pool.end();
  await pool.quit();
  const templateList: WebUITemplate[] = [];
  results.forEach((template: IWebUITemplateEntity) => {
    templateList.push(new WebUITemplate({
    name: template.name,
    thumbnail: template.thumbnail_url,
    id: template.id,}));
  });
  return NextResponse.json({ list: templateList });
}
