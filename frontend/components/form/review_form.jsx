import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            author_id: this.props.currentUser.id,
            rest_id: this.props.match.params.restId,
            comment: "",
            overall: 1,
            food: 1,
            ambience: 1,
            service: 1
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger
        this.props.closeReview();
        this.props.createReview(this.state);
    }

    render(){
        const klass = this.props.reviewOut ? "review-form" : "hidden";
        return (
            <form className={klass}>
                <h1>Review Form here</h1>
                <label>Comment
                    <input type="text" value={this.state.comment} onChange={this.update("comment")}/>
                </label>
                <label>How was the food?
                    <select value={this.state.rating} onChange={this.update("food")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <label>How was the service?
                    <select value={this.state.rating} onChange={this.update("service")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <label>How was the ambience?
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
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default withRouter(ReviewForm);