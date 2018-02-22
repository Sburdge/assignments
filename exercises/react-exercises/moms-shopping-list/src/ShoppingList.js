import React from 'react';
import ListForm from './ListForm';
import ItemsList from './ItemsList';

class ShoppingList extends React.Component {
    constructor(){
        super();
        this.state = {
            value: '',
            items: []
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.value !== ''){
            this.setState((prevState)=> ({
                value: '',
                items: [...prevState.items, prevState.value]
            }))
        }
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    handleDelete(id){
        this.setState(prevState => ({
            items: prevState.items.filter(item => item !== id)
        }))
    }

    handleComplete(id){
        return 'line-through'
    }

    render(){

        return (
            <div className="shoppingListContainer">
                <div className="formContainer">
                    <ListForm
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        value={this.state.value}
                    />
                </div>
                <div className="itemListContainer">
                    <ItemsList
                        items={this.state.items}
                        value={this.state.value}
                        handleDelete={this.handleDelete}
                        handleComplete={this.handleComplete}
                    />
                </div>
        </div>
        )
    }
}




export default ShoppingList;
