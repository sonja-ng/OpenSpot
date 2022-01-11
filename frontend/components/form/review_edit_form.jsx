import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewEditForm extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.review
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchReview(this.props.review.id);
    }

    // componentDidUpdate(prevProps){
    //     if (!this.props.currentUser) {
    //         this.setState({["author_id"]: ""})
    //     } else if (this.props.currentUser !== prevProps.currentUser) {
    //         this.setState({["author_id"]: this.props.currentUser})
    //     }
    // }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger
        this.props.closeEditReview();
        this.props.updateReview(this.state);
    }

    render(){
        const formErrors = this.props.errors ? (
            <div className="review-form-errors">{this.props.errors[0]}</div>
        ) : (
            null
        )
        const klass = this.props.reviewEditOut ? "review-form" : "hidden";
        const klass2 = this.props.reviewEditOut ? "review-form-bg" : "hidden";
        // debugger
        return (
            <div className={klass2}>
                <form className={klass}>
                    <button className="x_button" onClick={this.props.closeEditReview}><i className="fas fa-times"></i></button>
                    <div className="review-form-header">Edit your review</div>
                    <div className="rating-row">
                    <label>Food
                        <select value={this.state.rating} onChange={this.update("food")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <label>Service
                        <select value={this.state.rating} onChange={this.update("service")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <label>Ambience
                        <select value={this.state.rating} onChange={this.update("ambience")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <label>Overall Rating
                        <select value={this.state.rating} onChange={this.update("overall")}>
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
                    <button className="edit-review-submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewEditForm);