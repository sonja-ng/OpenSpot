import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            author_id: "",
            rest_id: this.props.match.params.restId,
            comment: "",
            overall: 1,
            food: 1,
            ambience: 1,
            service: 1
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetFields = this.resetFields.bind(this);
    }

    componentDidMount(){
        // debugger
        if (this.props.currentUser) {
            this.setState({author_id: this.props.currentUser.id})
        };
    }

    componentDidUpdate(prevProps){
        // debugger
        if (this.props.currentUser) {
            if (this.props.currentUser !== prevProps.currentUser) {
                this.setState({author_id: this.props.currentUser.id})
            }
        }   
    }

    resetFields(){
        this.setState({
            comment: "",
            overall: 1,
            food: 1,
            ambience: 1,
            service: 1
        });
        this.props.removeReviewErrors();
        this.props.closeReview();
    }

    update(field){
        // debugger
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger
        // this.setState({author_id: this.props.currentUser.id});
        this.props.createReview(this.state).then(this.resetFields);
        
    }

    render(){
        // debugger
        console.log(this.state);
        const formErrors = this.props.errors ? (
            <div className="review-form-errors">{this.props.errors[0]}</div>
        ) : (
            null
        )

        const klass = this.props.reviewOut ? "review-form" : "hidden";
        const klass2 = this.props.reviewOut ? "review-form-bg" : "hidden";

        return (
            <div className={klass2}>
                <form className={klass}>
                    <button className="x_button" onClick={this.resetFields}><i className="fas fa-times"></i></button>
                    <div className="review-form-header">Leave a review</div>
                    <div className="rating-row">
                    <label>Food
                        <select value={this.state.food} onChange={this.update("food")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <label>Service
                        <select value={this.state.service} onChange={this.update("service")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <label>Ambience
                        <select value={this.state.ambience} onChange={this.update("ambience")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <label>Overall Rating
                        <select value={this.state.overall} onChange={this.update("overall")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    </div>
                    <label>Comment<span className="red">*</span><br/>
                        <textarea value={this.state.comment} onChange={this.update("comment")}/>
                    </label>
                    {formErrors}
                    <button className="review-submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewForm);