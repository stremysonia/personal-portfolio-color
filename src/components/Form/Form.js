import './Form.css'
import React from "react";


const Form = () => {
    return (

        <>
        <div className="form-container">
            <input
                className="name-contact-form"
                placeholder="Name"
                id="name"
                type="text"
                name="name"
                autoComplete="off"
            />
                <input
                    className="email-contact-form"
                    placeholder="E-mail"
                    id="email"
                    type="text"
                    name="email"
                    autoComplete="off"
                />
                    <textarea
                        className="message-contact-form"
                        id="message"
                        type="text"
                        placeholder="Message"
                        autoComplete="off"
                    />
                        <button className="button">Submit</button>
            </div>
        </>
      
    )
}
export default Form;






























// export default class MyForm extends 
// React.Component {
//   constructor(props) {
//     super(props);
//     this.submitForm = this.submitForm.bind(this);
//     this.state = {
//       status: ""
//     };
//   }

//   render() {
//     const { status } = this.state;
//     return (
      
//       <div className="form-container">
//       <form
//         onSubmit={this.submitForm}
//         action="https://formspree.io/f/moqkzjrz"
//         method="POST"
//       >
//       <div className="contact-form">
//         <div>
//           <input
//             className="name-contact-form"
//             placeholder="Name"
//             id="name"
//             type="text"
//             name="name"
//             autoComplete="off"
//           />
//         </div>
//         <div>
//           <input
//             className="email-contact-form"
//             placeholder="E-mail"
//             id="email"
//             type="text"
//             name="email"
//             autoComplete="off"
//           />
//         </div>
//         <div>
//           <textarea
//             className="message-contact-form"
//             id="message"
//             type="text"
//             placeholder="Message"
//             autoComplete="off"
//           />
//         </div>
//         <div className="form-submit-container">
//         {status === "SUCCESS" ? <p>Thank you for your message.</p> : 
//         <button className="button">Submit</button>}
//         {status === "ERROR" && <p>Ooops! There was an error.</p>}
//         </div>
//         </div>
//       </form>
//       </div>
//     );
//   }

//   submitForm(ev) {
//     ev.preventDefault();
//     const form = ev.target;
//     const data = new FormData(form);
//     const xhr = new XMLHttpRequest();
//     xhr.open(form.method, form.action);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState !== XMLHttpRequest.DONE) return;
//       if (xhr.status === 200) {
//         form.reset();
//         this.setState({ status: "SUCCESS" });
//       } else {
//         this.setState({ status: "ERROR" });
//       }
//     };
//     xhr.send(data);
//   }
// }
