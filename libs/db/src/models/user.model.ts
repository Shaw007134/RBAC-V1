import { prop, modelOptions, DocumentType } from '@typegoose/typegoose';
import { hashSync } from 'bcryptjs';

export type UserDocument = DocumentType<User>;

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @prop({ unique: true })
  username: string;
  @prop({
    select: false,
    get(val) {
      return val;
    },
    set(val) {
      return val ? hashSync(val) : val;
    },
  })
  password: string;
  email: string;
  roles: [];
  isEnabled: boolean;
  @prop({ select: false })
  createdAt;
  @prop({ select: false })
  updatedAt;
}
