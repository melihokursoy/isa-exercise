import * as React from 'react';
import { ThemeProvider } from '@isa-exercise/ui';
import { DataProvider } from '@isa-exercise/state';
import Home from './home';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <DataProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </DataProvider>
    </React.Suspense>
  );
}

export default App;
