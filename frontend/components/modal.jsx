import React from 'react';
import LoginFormContainer from './form/login_form_container';
import SignupFormContainer from './form/signup_form_container';
import Gallery from './rest/gallery';

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.enableScrolling = this.enableScrolling.bind(this);
    }
// } = ({modal, closeModal}) => {

    enableScrolling(){
        document.body.classList.remove("disable_scroll");
        this.props.closeModal();
    };

    render() {
        const { modal } = this.props;

        if (!modal) {
          return null;
        }
        let component;
        switch (modal) {
          case 'login':
            component = <LoginFormContainer />;
            break;
          case 'signup':
            component = <SignupFormContainer />;
            break;
          case 'gallery':
            component = <Gallery />;
            break;
          default:
            return null;
        }
      
        return (
          <div className="form_background" onClick={this.enableScrolling}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
              { component }
            </div>
          </div>
        );

    }
}

export default Modal;

