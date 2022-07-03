// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Estatus = {
  "CREATED": "CREATED",
  "PROCESSING": "PROCESSING",
  "FINISHED": "FINISHED",
  "APROVED": "APROVED"
};

const Eusertype = {
  "ADMIN": "ADMIN",
  "USER": "USER"
};

const { CleanPlaceModel, TaskModel, LocationModel, UserModel } = initSchema(schema);

export {
  CleanPlaceModel,
  TaskModel,
  LocationModel,
  UserModel,
  Estatus,
  Eusertype
};