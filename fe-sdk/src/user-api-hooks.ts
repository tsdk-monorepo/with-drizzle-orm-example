
    
    
    import {
      useQuery,
      useMutation,
      QueryClient,
      UndefinedInitialDataOptions,
      UseMutationOptions,
    } from "@tanstack/react-query";
    import { AxiosRequestConfig } from "axios";
    
    
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
    import {
      
          CreateProject,
        
          CreateUser,
        
          GetAllUsersAndProjects,
        
    } from './user-api';
    
    
    let _queryClient: QueryClient;

    export function setQueryClient(queryClient: QueryClient) {
      _queryClient = queryClient;
    }
    
          
              export function useCreateProject(
                options?: UseMutationOptions<
                  CreateProjectRes,
                  Error,
                  CreateProjectReq,
                  unknown
                >,
                queryClient?: QueryClient,
                requestConfig?: AxiosRequestConfig<CreateProjectReq>,
                needTrim?: boolean
              ) {
                return useMutation(
                  {
                    ...(options || {}),
                    mutationFn(payload) {
                      return CreateProject(payload, requestConfig, needTrim);
                    },
                  },
                  queryClient || _queryClient
                );
              }
              
          
          
              export function useCreateUser(
                options?: UseMutationOptions<
                  CreateUserRes,
                  Error,
                  CreateUserReq,
                  unknown
                >,
                queryClient?: QueryClient,
                requestConfig?: AxiosRequestConfig<CreateUserReq>,
                needTrim?: boolean
              ) {
                return useMutation(
                  {
                    ...(options || {}),
                    mutationFn(payload) {
                      return CreateUser(payload, requestConfig, needTrim);
                    },
                  },
                  queryClient || _queryClient
                );
              }
              
          
          
          export function useGetAllUsersAndProjects(
            payload: GetAllUsersAndProjectsReq,
            options?: UndefinedInitialDataOptions<GetAllUsersAndProjectsRes, Error>,
            queryClient?: QueryClient,
            requestConfig?: AxiosRequestConfig<GetAllUsersAndProjectsReq>,
            needTrim?: boolean
          ) {
            return useQuery(
              {
                ...(options || {}),
                queryKey: [GetAllUsersAndProjects.config.path, payload],
                queryFn() {
                  return GetAllUsersAndProjects(payload, requestConfig, needTrim);
                },
              },
              queryClient || _queryClient
            );
          }
          
    