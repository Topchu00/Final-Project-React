import { RouterProvider } from 'react-router-dom';

import router from './router';

import './styles/index.scss';

function App() {
    return (
        <div className='root dark'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
