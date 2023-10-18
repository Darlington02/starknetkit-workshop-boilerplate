import StarknetProvider from './components/starknet-provider'
import Home from './components/home'

function App() {
  return (
    <StarknetProvider>
      <Home />
    </StarknetProvider>
  );
}

export default App;