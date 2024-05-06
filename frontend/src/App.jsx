import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AppRoutes from "./Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
