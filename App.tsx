// App.tsx
import React from 'react';
import store from './src/store/store';
import NewsListScreen from './src/screens/NewsListScreen';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NewsListScreen />
    </Provider>
  );
};

export default App;
