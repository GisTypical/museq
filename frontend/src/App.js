import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Landing from "./components/Landing";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="h-full bg-russianviolet text-white text-opacity-90">
      <QueryClientProvider client={queryClient}>
        <Landing></Landing>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
