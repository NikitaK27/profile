import React from 'react'
import "./profile.css";
import img1 from './images.png'

export default function () {
    

  return (
      
    <div>
       
        <section class="py-5 my-5">
		<div className="container">
			<h1 className="mb-5">Profile Settings</h1>
			<div className="bg-white shadow rounded-lg d-block d-sm-flex">
				<div className="profile-tab-nav border-right">
					<div className="p-4">
						<div className="img-circle text-center mb-3">
							<img src={
                                img1
                            } alt="Image" className="shadow"/>
						</div>
						<h4 className="text-center">Kiran Acharya</h4>
					</div>
					<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a className="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							<i className="fa fa-home text-center mr-1"></i> 
							Profile
						</a>
						<a className="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false">
							<i className="fa fa-key text-center mr-1"></i> 
							Social Links
						</a>
						<a className="nav-link" id="security-tab" data-toggle="pill" href="#security" role="tab" aria-controls="security" aria-selected="false">
							<i className="fa fa-laptop-code text-center mr-1"></i> 
							Tech side
						</a>
						
					</div>
				</div>
				<div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
					<div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
						<h3 className="mb-4">Account Settings</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>First Name</label>
								  	<input type="text" className="form-control" value="Name"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Last Name</label>
								  	<input type="text" className="form-control" value="Surname"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Email</label>
								  	<input type="text" className="form-control" value="abc@gmail.com"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Phone number</label>
								  	<input type="text" className="form-control" value="+91 9876543215"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Dept</label>
								  	<input type="text" className="form-control" value="IT/CS/EnTc"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Year</label>
								  	<input type="text" className="form-control" value="FE/SE/TE/BE"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>DIV</label>
                                      <input type="text" className="form-control" value="eg. SE 09"/>
								</div>
							</div>
                            <div className="col-md-6">
								<div className="form-group">
								  	<label>Roll no.</label>
                                      <input type="text" className="form-control" value="eg. 231xx"/>
								</div>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
					</div>
					<div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
						<h3 className="mb-4">Social MediaLinks</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Github</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>LinkedIn</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Instagram</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
					</div>
					<div className="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
						<h3 className="mb-4">Technical interest</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Web Development</label>
								  	<input type="text" className="form-control" value="Interested/Not Interested/ Not confirm"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>App Development</label>
								  	<input type="text" className="form-control"  value="Interested/Not Interested/ Not confirm"/>
								</div>
							</div>
                            <div className="col-md-6">
								<div className="form-group">
								  	<label>Game Development</label>
								  	<input type="text" className="form-control" value="Interested/Not Interested/ Not confirm"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Ml & Al</label>
								  	<input type="text" className="form-control"  value="Interested/Not Interested/ Not confirm"/>
								</div>
							</div>
							
                            <div className="col-md-6">
								<div className="form-group">
								  	<label>Data Analytic</label>
								  	<input type="text" className="form-control" value="Interested/Not Interested/ Not confirm"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Competitive Programming</label>
								  	<input type="text" className="form-control"  value="Interested/Not Interested/ Not confirm"/>
								</div>
							</div>
                            <div className="col-md-6">
								<div className="form-group">
								  	<label>Managment</label>
								  	<input type="text" className="form-control" value="Interested/Not Interested/ Not confirm"/>
								</div>
							</div>
							
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
					</div>
					
					<div className="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab">
						<h3 className="mb-4">Notification Settings</h3>
						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="notification1"/>
								<label className="form-check-label" for="notification1">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium accusamus, neque cupiditate quis
								</label>
							</div>
						</div>
						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="notification2" />
								<label className="form-check-label" for="notification2">
									hic nesciunt repellat perferendis voluptatum totam porro eligendi.
								</label>
							</div>
						</div>
						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="notification3" />
								<label className="form-check-label" for="notification3">
									commodi fugiat molestiae tempora corporis. Sed dignissimos suscipit
								</label>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
    </div>
  )
}
