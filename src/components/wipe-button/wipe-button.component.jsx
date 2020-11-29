import React, { useContext } from 'react';
import { Popconfirm, Button, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { DataTableContext } from '../../services/hooks/data-table/data-table.context';

const WipeButton = () => {
	const { deleteAllItems } = useContext(DataTableContext);

	const onDeleteAll = () => {
		try {
			fetch(`http://localhost:5000/org-group`, {
				method: 'DELETE',
			}).then(() => deleteAllItems());
			message.success(`Success deleted all record`);
		} catch (err) {
			message.error(`Error deleted all record`);
		}
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
