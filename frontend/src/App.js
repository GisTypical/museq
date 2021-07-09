import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Landing from "./components/Landing";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="h-full bg-russianviolet text-white text-opacity-90">
      <QueryClientProvider client={queryClient}>
        <Landing></Landing>
      </QueryClientProvider>
    </div>
  );
}

export default App;
