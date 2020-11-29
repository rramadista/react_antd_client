import React, { useState } from 'react';
import { Space, Button, Popconfirm } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import ModalButton from '../modal-button/modal-button.component';
import PreviewDrawer from '../preview-drawer/preview-drawer.component';

const TableActionButton = ({ onDeleteConfirm, record }) => {
	const [visibleDrawer, setVisibleDrawer] = useState(false);

	const showDrawer = () => {
		setVisibleDrawer(true);
	};

	const onCloseDrawer = () => {
		setVisibleDrawer(false);
	};

	return (
		<>
			<Space>
				<Button icon={<EyeOutlined />} onClick={showDrawer}>
					View
				</Button>
				<ModalButton buttonLabel='Edit' record={record} />
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
			<PreviewDrawer
				onClose={onCloseDrawer}
				visible={visibleDrawer}
				data={record}
			/>
		</>
	);
};

export default TableActionButton;
