import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

 class PostForm extends Component {

    constructor(props){
        super();
        this.state = {
            text:'',
            errors:{}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.errors) {
          this.setState({ errors: newProps.errors });
        }
      }
    
 onSubmit(e) {

     e.preventDefault();
     const {user} = this.props.auth;
     const newPost ={
         text:this.state.text,
         name: user.name,
       avatar: user.avatar
    };

    this.props.addPost(newPost);  //firing addPost action to dispatch to reducers 
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  } 


  render() {
      const {errors} = this.state;
    return (
    <div className="post-form mb-3">
      <div className="card card-info">
        <div className="card-header bg-info text-white">Say Something...</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input type={type} className={classnames('form-control form-control-lg', { 'is-invalid': error })}
                  placeholder={placeholder}
                  name={name}
                  value={value}
                  onChange={onChange}
                  disabled={disabled}    
                 />
                {info && <small className="form-text text-muted">{info}</small>}
                {error && <div className="invalid-feedback">{error}</div>}
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
    </div>
     
    )
  }
}


PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(mapStateToProps , {addPost})(PostForm)