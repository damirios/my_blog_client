import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Content from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";

import './style/css/style.css';
import { Sidebar } from "./components/sidebar/Sidebar";
import { PostsGrid } from "./components/posts/PostsGrid";
import Container from "./components/Container";
import { PostFullPage } from "./components/posts/PostFullPage";
import { AboutMePage } from "./components/AboutMePage";
import { UserForm } from "./components/UserForm";



function App() {

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="App">
			<BrowserRouter>
				<Header openSidebar={() => setIsSidebarOpen(true)} />
				<Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
				<Content>
					<Container>
						<Routes>
							<Route path="/user/sign-up" element={<UserForm isLogin={false} />} />
							<Route path="/user/login" element={<UserForm isLogin={true} />} />
							<Route path="/post/:id" element={<PostFullPage />} />
							<Route path="/post" element={<PostsGrid />} />
							<Route path="/about" element={<AboutMePage />} />
							<Route path="/" element={<Navigate to="/post" />} />
						</Routes>
					</Container>
				</Content>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
