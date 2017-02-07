import React from 'react';

const AddingInput = React.createClass({
    addItem: function() {

    },
    render: function() {

        let input;

        return (
            <form className="form">
                <p>New task here:</p>
                <input ref={node => {
                    input = node;
                }}
                       className="form__input" />
                <span onClick={() => {
                    this.props.addTodo(input.value);
                    input.value = '';}}
                        className="form__add btn">Add</span>
            </form>
        )
    }
});

export default AddingInput;