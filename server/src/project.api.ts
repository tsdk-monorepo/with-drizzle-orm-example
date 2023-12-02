import { genRoute, type RequestInfo } from "./gen-route";
import {
  CreateUserConfig,
  CreateUserReq,
  CreateUserRes,
  CreateProjectConfig,
  CreateProjectReq,
  CreateProjectRes,
  GetAllUsersAndProjectsConfig,
  GetAllUsersAndProjectsReq,
  GetAllUsersAndProjectsRes,
} from "./project.apiconf";
import { projectService } from "./project.service";

export function setupHelloAPI() {
  genRoute<CreateUserReq, CreateUserRes>(
    CreateUserConfig,
    async (reqInfo: Readonly<RequestInfo>, data) => {
      return projectService.createUser(data);
    }
  );

  genRoute<CreateProjectReq, CreateProjectRes>(
    CreateProjectConfig,
    async (reqInfo: Readonly<RequestInfo>, data) => {
      return projectService.createProject(data);
    }
  );

  genRoute<GetAllUsersAndProjectsReq, GetAllUsersAndProjectsRes>(
    GetAllUsersAndProjectsConfig,
    async (reqInfo: Readonly<RequestInfo>, data) => {
      return projectService.getAllUsersAndProjects(data);
    }
  );
}
