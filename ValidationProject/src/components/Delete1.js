import React, { Component } from 'react';

export class Image extends Component {
  state={
    profileImg:''
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state
		return (
			<div>
				<div>
					<h1>Add your Image</h1>
					<div>
						<img src={profileImg} alt="" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div className="label">
                    
                    <label htmlFor="input">
						Choose your Photo
					</label>
          </div>
				</div>
			</div>
		);
	}
}

export default Image;