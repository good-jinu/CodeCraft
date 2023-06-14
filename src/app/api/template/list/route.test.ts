import { WebUITemplate } from '@/domain/apiData/WebUITemplate';
import { GET } from './route';
import { NextRequest } from 'next/server';

describe('GET method for template list', () => {
  it('returns a list of templates', async () => {
    const response = await GET(new NextRequest('http://localhost/api/template/list'));
    const responseData: {list: WebUITemplate[]} = await response.json();

    expect(responseData.list.length).toBeGreaterThan(0);
    responseData.list.forEach(template => {
      if(typeof template.id !== 'number') throw new Error('id should be number');
      if(template.id < 0) throw new Error('id should be equal or greater than 0');
      if(typeof template.name !== 'string') throw new Error('name should be string');
      if(typeof template.thumbnail !== 'string') throw new Error('thumbnail should be string');
    });
  });
});
