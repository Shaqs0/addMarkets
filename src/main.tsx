import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ContactPage, PhotoPage, StartPage } from './pages';
import { Layout } from './layout/Layout';

const router = createBrowserRouter([
	{
		path:'/',
		element: <Layout/>,
		children: [
			{
				path:'/',
				element: <StartPage/>
			},
			{
				path:'/contacts',
				element: <ContactPage/>
			},
			{
				path:'/photo',
				element:<PhotoPage/>
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>,
);
