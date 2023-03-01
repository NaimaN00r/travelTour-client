import './App.css';
import { RouterProvider } from 'react-router';
import router from './Routes/Route';

function App() {
  return (
    <div className=' mx-auto'data-theme="light">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
