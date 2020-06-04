import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  responseLayui(code: number, msg: string, data: any) {
    return {
      code: code,
      msg: msg,
      data: {...data}
    };
  }
}
