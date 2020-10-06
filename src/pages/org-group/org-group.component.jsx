import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import ModalForm from '../../components/modal-form/modal-form.component';
import DataTable from '../../components/data-table/data-table.component';
import DownloadButton from '../../components/download-button/download-button.component';
import UploadButton from '../../components/upload-button/upload-button.component';

const OrgGroupPage = () => {
	const [data, setData] = useState([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);

	const addItemToData = (item) => {
		setData([...data, item]);
	};

	const updateDataItem = (item) => {
		const itemIndex = data.findIndex((record) => record.id === item.id);
		const updatedData = [
			...data.slice(0, itemIndex),
			item,
			...data.slice(itemIndex + 1),
		];
		setData(updatedData);
	};

	const deleteItemFromData = (id) => {
		const updatedData = data.filter((record) => record.id !== id);
		setData(updatedData);
	};

	const onSelectChange = (selectedRowKeys) => {
		console.log(`selectedRowKeys changed: `, selectedRowKeys);
		setSelectedRowKeys(selectedRowKeys);
	};

	const rowSelection = { selectedRowKeys, onChange: onSelectChange };
	const hasSelected = selectedRowKeys.length > 0;

	return (
		<>
			<Space>
				<DownloadButton data={data} filename='org-group' />
				<UploadButton />
				<ModalForm buttonLabel='Add' addItemToData={addItemToData} />
				<Button
					type='primary'
					disabled={!hasSelected}
					icon={<DeleteOutlined />}
					style={{ marginBottom: 16 }}
					danger
				>
					Delete
				</Button>
				<span style={{ marginLeft: 8 }}>
					{hasSelected
						? `Selected ${selectedRowKeys.length} items`
						: ''}
				</span>
			</Space>
			<DataTable
				data={data}
				setData={setData}
				updateDataItem={updateDataItem}
				deleteItemFromData={deleteItemFromData}
				rowSelection={rowSelection}
			/>
		</>
	);
};

export default OrgGroupPage;
