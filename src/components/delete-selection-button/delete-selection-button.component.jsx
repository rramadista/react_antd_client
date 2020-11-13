import React from 'react';
import { Popconfirm, Button, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const DeleteSelectionButton = ({
	selectedRowKeys,
	deleteMultipleItemsFromData,
}) => {
	const onSelectedDelete = async (id) => {
		console.log(id);
		try {
			await fetch(`http://localhost:5000/org-group/bulk`, {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(id),
			})
				.then(() => deleteMultipleItemsFromData(id))
				.catch((err) => console.log(err));
			message.success(`Success deleted bulk record`);
		} catch (err) {
			message.error(`Error deleted bulk record`);
		}
	};

	const hasSelected = selectedRowKeys.length > 0;

	return (
		<>
			<div style={{ marginBottom: 16 }}>
				<Popconfirm
					title='Are you sure to delete all selected row?'
					onConfirm={() => onSelectedDelete(selectedRowKeys)}
					onCancel={null}
					okText='Yes'
					cancelText='No'
					disabled={!hasSelected}
				>
					<Button
						disabled={!hasSelected}
						icon={<DeleteOutlined />}
						danger
					>
						Delete
					</Button>
				</Popconfirm>
				<span style={{ marginLeft: 8 }}>
					{hasSelected
						? `Selected ${selectedRowKeys.length} items`
						: ''}
				</span>
			</div>
		</>
	);
};

export default DeleteSelectionButton;
