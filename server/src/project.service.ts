import Database from "better-sqlite3";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { projects, users } from "./schema.entity";
import {
  CreateUserReq,
  CreateUserRes,
  CreateProjectReq,
  CreateProjectRes,
  GetAllUsersAndProjectsReq,
  GetAllUsersAndProjectsRes,
} from "./project.apiconf";

const sqlite = new Database("./sqlite.db");
const db = drizzle(sqlite);

class ProjectService {
  async createUser(payload: CreateUserReq): Promise<CreateUserRes> {
    return db.insert(users).values(payload).returning({ id: users.id });
  }

  async createProject(payload: CreateProjectReq): Promise<CreateProjectRes> {
    return db.insert(projects).values(payload).returning({ id: projects.id });
  }

  async getAllUsersAndProjects(
    payload: GetAllUsersAndProjectsReq
  ): Promise<GetAllUsersAndProjectsRes> {
    return db
      .select()
      .from(users)
      .leftJoin(projects, eq(users.id, projects.ownerId))
      .execute();
  }
}

export const projectService = new ProjectService();
