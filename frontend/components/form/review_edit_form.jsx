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
        const klass = this.props.reviewEditOut ? "review-form" : "hidden";
        // debugger
        return (
            <form className={klass}>
                <h1>Review Form here</h1>
                <label>Comment
                    <input type="text" value={this.state.comment} onChange={this.update("comment")}/>
                </label>
                <label>Rating
                    <select value={this.state.rating} onChange={this.update("rating")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <button onClick={this.handleSubmit}>Update</button>
            </form>
        )
    }
}

export default withRouter(ReviewEditForm);