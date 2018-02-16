const GreeterMessage = React.createClass({
    render: function() {
        let name = this.props.name;
        let message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

const GreeterForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        let updates = {};
        let name = this.refs.name.value;
        let message = this.refs.message.value;

        if(name.length > 0){
            this.refs.name.value = '';
            updates.name = name;
        }
        if(message.length > 0){
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onNewData(updates);
    },
    
    render: function(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="name" placeholder="Name"/>
                    </div>
                    <div>
                        <textarea ref="message" placeholder="Enter message"></textarea>
                    </div>
                    <div>
                    <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
});

const Greeter = React.createClass({
    getDefaultProps: function(){
        return {
            name: 'React',
            message: 'A default message'
        };
    },

    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    handleNewData: function(updates){
        this.setState(updates);
    },
    render: function(){
        let name = this.state.name;
        let message = this.state.message;

        return (
        <div>

            <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>

        </div>
        );
    }
});

const firstName = 'Nate';

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
)

/////////