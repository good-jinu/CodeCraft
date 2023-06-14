export interface IWebUITemplate {
  id: number;
  name: string;
  thumbnail: string;
};

export class WebUITemplate implements IWebUITemplate {
  id: number;
  name: string;
  thumbnail: string;

  constructor(param: IWebUITemplate) {
    this.id = param.id;
    this.name = param.name;
    this.thumbnail = param.thumbnail;
  }

  validateParam(param: IWebUITemplate) {
    if(typeof param.id !== 'number') throw new Error('id should be number');
    if(param.id < 0) throw new Error('id should be equal or greater than 0');
    if(typeof param.name !== 'string') throw new Error('name should be string');
    if(typeof param.thumbnail !== 'string') throw new Error('thumbnail should be string');
  }
}