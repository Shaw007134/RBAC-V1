import {  DocumentType, prop } from '@typegoose/typegoose';


export type RoleMenuDocument = DocumentType<RoleMenu>;


export class RoleMenu {
  @prop({ required: true })
  userId: string;
  @prop({ required: true })
  menuId: string;
}
