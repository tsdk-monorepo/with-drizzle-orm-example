
      
      /** 
       * 
       * api-user.ts 
       * fe-sdk@1.0.0 
       * 
       **/

      import genApi from './gen-api';
     

      import {
          
          CreateProjectConfig,
          type CreateProjectReq,
          type CreateProjectRes,
        
          CreateUserConfig,
          type CreateUserReq,
          type CreateUserRes,
        
          GetAllUsersAndProjectsConfig,
          type GetAllUsersAndProjectsReq,
          type GetAllUsersAndProjectsRes,
        
        } from './apiconf-refs';
      
      
          /** 
           * Create project
           * 
           * @category project
           */
          export const CreateProject = genApi<CreateProjectReq, CreateProjectRes>(CreateProjectConfig);
        
          /** 
           * Create user
           * 
           * @category project
           */
          export const CreateUser = genApi<CreateUserReq, CreateUserRes>(CreateUserConfig);
        
          /** 
           * Get all users and projects
           * 
           * @category project
           */
          export const GetAllUsersAndProjects = genApi<GetAllUsersAndProjectsReq, GetAllUsersAndProjectsRes>(GetAllUsersAndProjectsConfig);
        
    