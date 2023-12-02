import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { setQueryClient, useGetAllUsersAndProjects } from '@/lib/user-api-hooks';

const queryClient = new QueryClient();
setQueryClient(queryClient);

export default function Main() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}

function App() {
  const { data, error } = useGetAllUsersAndProjects({});

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={[styles.container]}>
          <StatusBar style="auto" />
          <Text>{JSON.stringify(data, null, 2)}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
