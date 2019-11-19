import React, { Component } from 'react';

class UserProfile extends Component {

	constructor(props){
		super(props);
		
		this.state = {
            name: '',
            location: '',
            avatar_url: ''
        }
        
        this.loadUserInfo = this.loadUserInfo.bind(this);
	}

	onSuccessStored(){
		this.hideTodoFormComponent();
    }	
    
    loadUserInfo() {
        const url = 'https://api.github.com/users/' + this.props.userName;

        fetch(url)
        .then(res => res.json())
        .then(
            (data) => {
				console.log(data);
                this.setState({name: data.name, location: data.location, avatar_url: data.avatar_url });
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

	componentWillMount(){
        this.loadUserInfo();
	}

	renderHeader(){
		return(
		<div className="card border-dark mb-3">	
			<div className="card-header">
				<div className="row">
					<div className="col-lg-2 col-md-2 col-sm-2">
						<button className="btn btn-primary" onClick={ () => window.location.href = '' }>Back</button>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-8">
						<h4 className="movement-title-list">Person</h4>
					</div>
				</div>
			</div>
		</div>
		)
	}

	render(){
		return(
			<div className="main-container">
				{ this.renderHeader() }
				<div className="row">
					<div className="col-lg-2 col-md-2 col-sm-2">
						<img className="user-profile-picture" src={ this.state.avatar_url }></img>
					</div>
					<div className="col-lg-10 col-md-10 col-sm-10">
						<ul>
							<li>{ this.state.name }</li>	
							<li>{ this.state.location }</li>	
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default UserProfile;