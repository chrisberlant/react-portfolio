import {
	Route,
	RouterProvider,
	createHashRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Projects from './components/Projects/Projects';
import HomePage from './components/HomePage/HomePage';
import Tools from './components/Tools/Tools';
import RootLayout from './components/RootLayout/RootLayout';

const router = createHashRouter(
	createRoutesFromElements(
		<Route element={<RootLayout />} path='/'>
			<Route index element={<HomePage />} />
			<Route element={<Projects />} path='/projects' />
			<Route element={<Tools />} path='/tools' />
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
