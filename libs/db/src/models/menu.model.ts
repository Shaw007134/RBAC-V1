import { prop, modelOptions, DocumentType } from '@typegoose/typegoose';

export type MenuDocument = DocumentType<Menu>;

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Menu {
  @prop({ unique: true })
  public menuname: string;
  @prop({ select: true })
  public path: string;
  @prop({ select: true })
  public parentId: string;
  @prop({ select: true })
  public level: number;
  @prop({ select: false })
  createdAt;
  @prop({ select: false })
  updatedAt;
  @prop({ index: true })
  id;
}
