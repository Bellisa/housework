import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Estatus {
  CREATED = "CREATED",
  PROCESSING = "PROCESSING",
  FINISHED = "FINISHED",
  APROVED = "APROVED"
}

export enum Eusertype {
  ADMIN = "ADMIN",
  USER = "USER"
}



type CleanPlaceModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TaskModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocationModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CleanPlaceModel {
  readonly id: string;
  readonly locationmodelID: string;
  readonly title_place?: string | null;
  readonly instruction?: string | null;
  readonly TaskModels?: (TaskModel | null)[] | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CleanPlaceModel, CleanPlaceModelMetaData>);
  static copyOf(source: CleanPlaceModel, mutator: (draft: MutableModel<CleanPlaceModel, CleanPlaceModelMetaData>) => MutableModel<CleanPlaceModel, CleanPlaceModelMetaData> | void): CleanPlaceModel;
}

export declare class TaskModel {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly status?: Estatus | keyof typeof Estatus | null;
  readonly usermodelID: string;
  readonly started_date?: string | null;
  readonly finished_date?: string | null;
  readonly plan_start_date?: string | null;
  readonly cleanplacemodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TaskModel, TaskModelMetaData>);
  static copyOf(source: TaskModel, mutator: (draft: MutableModel<TaskModel, TaskModelMetaData>) => MutableModel<TaskModel, TaskModelMetaData> | void): TaskModel;
}

export declare class LocationModel {
  readonly id: string;
  readonly name?: string | null;
  readonly CleanPlaceModels?: (CleanPlaceModel | null)[] | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<LocationModel, LocationModelMetaData>);
  static copyOf(source: LocationModel, mutator: (draft: MutableModel<LocationModel, LocationModelMetaData>) => MutableModel<LocationModel, LocationModelMetaData> | void): LocationModel;
}

export declare class UserModel {
  readonly id: string;
  readonly login: string;
  readonly password: string;
  readonly name?: string | null;
  readonly taskmodels?: (TaskModel | null)[] | null;
  readonly user_type?: Eusertype | keyof typeof Eusertype | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserModel, UserModelMetaData>);
  static copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel, UserModelMetaData>) => MutableModel<UserModel, UserModelMetaData> | void): UserModel;
}