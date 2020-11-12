import React from 'react';
import { Button, Card } from 'antd';

import { deleteItem, toggleItem } from './todo.actions';

const Todo = ({ item, dispatch }) => {
	return (
		<>
			<Card
				hoverable
				title='Data'
				extra={
					<>
						<Button onClick={() => dispatch(toggleItem(item))}>
							Toggle
						</Button>
						<Button onClick={() => dispatch(deleteItem(item))}>
							Delete
						</Button>
					</>
				}
				style={{ width: 300, color: item.complete ? '#AAA' : '#000' }}
			>
				{item.name}
			</Card>
		</>
	);
};

export default Todo;
