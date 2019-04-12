import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
//import TextFieldGroup from '../common/TextFieldGroup';
//import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';
import classnames from 'classnames';

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      degree: '',
      fieldofstudy: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false,
      info:''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(eduData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;
    const info = '';

    return (
      <div className="add-education">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Education</h1>
              <p className="lead text-center">
                Add any school, bootcamp, etc that you have attended
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>

               <div className="form-group">
                <input type="school" className={classnames('form-control form-control-lg', {'is-invalid': errors.school})}
                 placeholder="* School" name="school" value={this.state.school} onChange={this.onChange} 
                 errors={errors.school} />
                 {errors && <div className="invalid-feedback">{errors.school}</div>}
               </div>

               <div className="form-group">
                <input type="degree" className={classnames('form-control form-control-lg', {'is-invalid': errors.degree})}
                 placeholder="* Degree or Certification" name="degree" value={this.state.degree} onChange={this.onChange} 
                 errors={errors.degree} />
                 {errors && <div className="invalid-feedback">{errors.degree}</div>}
               </div>

               <div className="form-group">
                <input type="fieldofstudy" className={classnames('form-control form-control-lg', {'is-invalid': errors.fieldofstudy})}
                 placeholder="* Field of Study" name="fieldofstudy" value={this.state.fieldofstudy} onChange={this.onChange}  />
                 {errors && <div className="invalid-feedback">{errors.fieldofstudy}</div>}
               </div>

               <h6>From Date</h6>

               <div className="form-group">
                <input type="date" className={classnames('form-control form-control-lg', {'is-invalid': errors.from})}
                  name="from" value={this.state.from} onChange={this.onChange}  />
                 {errors && <div className="invalid-feedback">{errors.from}</div>}
               </div>

               <h6>To Date</h6>

               <div className="form-group">
                <input type="date" className={classnames('form-control form-control-lg', {'is-invalid': errors.to})}
                  name="to" value={this.state.to} onChange={this.onChange} 
                  disabled={this.state.disabled ? 'disabled' : ''} />
                 {errors && <div className="invalid-feedback">{errors.to}</div>}
               </div>

               <div className="form-check mb-4">
                  <input type="checkbox" className="form-check-input" name="current" value={this.state.current}
                   checked={this.state.current}  onChange={this.onCheck} id="current" />
                    <label htmlFor="current" className="form-check-label">
                    Current Job
                    </label>
                </div>
                <div className="form-group">
                 <textarea className={classnames('form-control form-control-lg', {'is-invalid': errors.description})}
                  placeholder="Program Description" name="description" value={this.state.description} onChange={this.onChange}
                   info="Tell us about the program that you were in"/>
                  {info && <small className="form-text text-muted">{info}</small>}
                  {errors && <div className="invalid-feedback">{errors.description}</div>}
                </div>
                <input  type="submit"  value="Submit"  className="btn btn-info btn-block mt-4"/>
             </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addEducation })(
  withRouter(AddEducation)
);
                    
                    
                    
                    
                  
                  
                    
                 


