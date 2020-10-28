import React from 'react';
import { Popconfirm, Button, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const WipeButton = ({ deleteAllItems }) => {
	const onDeleteAll = () => {
		fetch(`http://localhost:5000/org-group`, {
			method: 'DELETE',
		})
			.then(() => deleteAllItems())
			.catch((err) => console.log(err));
		message.success(`Success deleted all record`);
	};

	return (
		<>
			<div style={{ marginBottom: 16 }}>
				<Popconfirm
					title='Are you sure to delete all selected row?'
					onConfirm={() => onDeleteAll()}
					onCancel={null}
					okText='Yes'
					cancelText='No'
				>
					<Button type='primary' icon={<DeleteOutlined />} danger>
						Wipe
					</Button>
				</Popconfirm>
			</div>
		</>
	);
};

export default WipeButton;
