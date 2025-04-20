import mongoose, { Schema, Document } from 'mongoose';

interface IDeal extends Document {
  id: number;
  title: string;
  value: number;
  currency: string;
  status: string;
  won_time: Date;
  close_time: Date;
  add_time: Date;
  update_time: Date;
  creator_user_id: { id: number; name: string; email: string };
  user_id: { id: number; name: string; email: string };
  person_id: {
    name: string;
    email: { label: string; value: string; primary: boolean }[];
    phone: { label: string; value: string; primary: boolean }[];
  };
  org_id: {
    name: string;
    people_count: number;
    cc_email: string;
  };
  expected_close_date: Date;
  pipeline_id: number;
  stage_id: number;
  origin: string;
}

const DealSchema: Schema = new Schema(
  {
    id: { type: Number, unique: true },
    title: String,
    value: Number,
    currency: String,
    status: String,
    won_time: Date,
    close_time: Date,
    add_time: Date,
    update_time: Date,

    creator_user_id: {
      id: Number,
      name: String,
      email: String,
    },

    user_id: {
      id: Number,
      name: String,
      email: String,
    },

    person_id: {
      name: String,
      email: [{ label: String, value: String, primary: Boolean }],
      phone: [{ label: String, value: String, primary: Boolean }],
    },

    org_id: {
      name: String,
      people_count: Number,
      cc_email: String,
    },

    expected_close_date: Date,
    pipeline_id: Number,
    stage_id: Number,
    origin: String,
  },
  { collection: 'deals' }
);

export const Deal = mongoose.model<IDeal>('Deal', DealSchema);
