'use client';



import {
  useGetAllUsersAndProjects
} from '@/lib/user-api-hooks';



export function App() {
  const { data, error } = useGetAllUsersAndProjects({});

  console.log(data);

  return (
    <div className="p-8">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
