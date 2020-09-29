import React from 'react';
import { Space, Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import ModalForm from '../modal-form/modal-form.component';

const TableActionButton = ({ onDeleteConfirm, updateDataItem, record }) => {
	return (
		<Space>
			<ModalForm
				buttonLabel='Edit'
				updateDataItem={updateDataItem}
				record={record}
			/>
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
