import React from 'react';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import Demo from './Demo';
// import Form from './form';
import Dataform from './Dataform';
import Zodfile from './Zodfile';

const queryprovider=new QueryClient()
function App() {
  return (
  <QueryClientProvider client={queryprovider}>
    {/* <Dataform/> */}
    <Zodfile/>
  </QueryClientProvider>
  );
}

export default App;
