import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// Create a client
const queryClient = new QueryClient()

import { Container } from "./components/container.tsx";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container/>
    </QueryClientProvider>
  )
}

export default App
