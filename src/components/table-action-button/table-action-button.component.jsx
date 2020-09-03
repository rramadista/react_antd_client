import React from 'react';
import { Space, Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const TableActionButton = ({ onDeleteConfirm }) => {
	return (
		<Space>
			<Button icon={<EditOutlined />}>Edit</Button>
			<Popconfirm
				title='Are you sure to delete this row?'
				onConfirm={onDeleteConfirm}
				onCancel={null}
				okText='Yes'
				cancelText='No'
			>
				<Button icon={<DeleteOutlined />} danger>
					Delete
				</Button>
			</Popconfirm>
		</Space>
	);
};

export default TableActionButton;
