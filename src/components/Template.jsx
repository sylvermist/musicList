import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HeaderContainer from './shared/HeaderContainer';
import HomePage from './home/HomePageContainer';
import LoginPage from './account/LoginPageContainer';
import ProfilePage from './account/ProfilePage';
import RegisterPage from './account/RegisterPageContainer';

export default function Template(props) {
	const { authentication, progress } = props;
	return (
		<Router>
			<div className="wrapper">
				<HeaderContainer username="anonymous" authentication={authentication} />
				<section className="page-content container-fluid">
					<Route exact path="/" component={HomePage} />
					<Route exact path="/account/login" component={LoginPage} />
					<Route exact path="/account/register" component={RegisterPage} />
					<Route path="/account/profile/:id" component={ProfilePage} />
				</section>
				<div className="loader-wrapper" style={progress > 0 ? { display: 'block' } : { display: 'none' }}>
					<div className="loader-box">
						<div className="loader">Loading...</div>
					</div>
				</div>
			</div>
		</Router>
	);
}
