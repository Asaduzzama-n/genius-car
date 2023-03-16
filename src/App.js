import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Router/Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="max-w-7xl mx-auto">
        <RouterProvider router={routes}></RouterProvider>
        <Toaster></Toaster>
    </div>
  );
}

export default App;
