// import React from 'react';
// import './Contact.css';
// import { render } from '@testing-library/react';

// class Contact extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''}

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
// }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('A name submitted: ' + this.state.value);
//         event.preventDefault()
//     }
// }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div className="form">
//                 <div className= "form-container">
//                     <label>
//                         Name:
//                             <input type="text" value={this.state.value} onChange={this.handleChange} 
//                             placeholder="Name" className="form-name" required/>
//                     </label>
//                             <label>
//                                 E-mail:
//                                 <input type="text" value={this.state.value} onChange={this.handleChange}
//                                 placeholder="E-mail Address" className="form-email-address" required/>
//                             </label>
//                                     <label>
//                                         Phone Numbar:
//                                         <input type="text" 
//                                         placeholder="Phone Number" className="form-phone-number" required/>
//                                     </label>
//                                             <label>
//                                                 Subject:
//                                                 <input type="text" value={this.state.value} onChange={this.handleChange}
//                                                 placeholder="Subject" className="form-subject" required/>
//                                                 <div className="form-messsage"></div>
//                                             </label>
//                                                     <div>
//                                                     <button className="form-submit-button">Submit</button>
//                                                     </div>
//                 </div>
//                 </div>
//             </form>
//         );
// } 
// export default Contact;