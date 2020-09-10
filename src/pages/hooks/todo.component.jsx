import React from 'react';
import { Button, Card } from 'antd';

import { TODO_ACTIONS } from './use-reducer.component';

const Todo = ({ todo, dispatch }) => {
	return (
		<>
			<Card
				hoverable
				title='Data'
				extra={
					<>
						<Button
							onClick={() =>
								dispatch({
									type: TODO_ACTIONS.TOGGLE_TODO,
									payload: { id: todo.id },
								})
							}
						>
							Toggle
						</Button>
						<Button
							onClick={() =>
								dispatch({
									type: TODO_ACTIONS.DELETE_TODO,
									payload: { id: todo.id },
								})
							}
						>
							Delete
						</Button>
					</>
				}
				style={{ width: 300, color: todo.complete ? '#AAA' : '#000' }}
			>
				{todo.name}
			</Card>
		</>
	);
};

export default Todo;
