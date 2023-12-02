import { transformPath, APIConfig } from "@/src/shared/tsdk-helper";
import type { User, Project } from "./schema.entity";

/**
 * Create user ({@link APIConfig})
 * @category project
 */
export const CreateUserConfig: APIConfig = {
  type: "user",
  method: "post",
  path: transformPath("CreateUser"),
  description: "Create user",
  category: "project",
  needAuth: false,
};
/**
 *
 * @category project
 */
export type CreateUserReq = Pick<User, "fullName">;

/**
 *
 * @category project
 */
export type CreateUserRes = Pick<User, "id">[];
// --------- CreateUser END ---------

/**
 * Create project ({@link APIConfig})
 * @category project
 */
export const CreateProjectConfig: APIConfig = {
  type: "user",
  method: "post",
  path: transformPath("CreateProject"),
  description: "Create project",
  category: "project",
  needAuth: false,
};
/**
 *
 * @category project
 */
export type CreateProjectReq = Pick<Project, "name" | "ownerId">;

/**
 *
 * @category project
 */
export type CreateProjectRes = Pick<Project, "id">[];
// --------- createProject END ---------

/**
 * Get all users and projects ({@link APIConfig})
 * @category project
 */
export const GetAllUsersAndProjectsConfig: APIConfig = {
  type: "user",
  method: "get",
  path: transformPath("GetAllUsersAndProjects"),
  description: "Get all users and projects",
  category: "project",
  needAuth: false,
};
/**
 *
 * @category project
 */
export type GetAllUsersAndProjectsReq = object;

/**
 *
 * @category project
 */
export type GetAllUsersAndProjectsRes = { users: User; projects: Project }[];
// --------- GetAllUsersAndProjects END ---------
