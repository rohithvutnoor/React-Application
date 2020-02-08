import React from 'react';
import TodoItem from './TodoItem'
import data from './itemsList.json'

class Todos extends React.Component {
    render() {
        const items = data.map(item => {
            return (
                <TodoItem item={item} />
            );
        });

        return (
            <div>
                {items}
            </div>
        )
    }
}

export default Todos;
