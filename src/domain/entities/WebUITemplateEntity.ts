export interface IWebUITemplateEntity {
  id: number;
  name: string;
  thumbnail_url: string;
};

export class WebUITemplateEntity implements IWebUITemplateEntity {
  id: number;
  name: string;
  thumbnail_url: string;

  constructor(param: IWebUITemplateEntity) {
    this.id = param.id;
    this.name = param.name;
    this.thumbnail_url = param.thumbnail_url;
  }

  validateParam(param: IWebUITemplateEntity) {
    if(typeof param.id !== 'number') throw new Error('id should be number');
    if(param.id < 0) throw new Error('id should be equal or greater than 0');
    if(typeof param.name !== 'string') throw new Error('name should be string');
    if(typeof param.thumbnail_url !== 'string') throw new Error('thumbnail should be string');
  }
}