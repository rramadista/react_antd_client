import React, { useState } from 'react';
import { Button, Space, Popconfirm, message } from 'antd';
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

	const addMultipleItemsToData = (items) => {
		setData(data.concat(items));
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

	const deleteMultipleItemsFromData = (ids) => {
		let updatedData = [...data];
		ids.forEach((id) => {
			updatedData = updatedData.filter((record) => record.id !== id);
		});
		setData(updatedData);
		setSelectedRowKeys([]);
	};

	const onSelectedDelete = (id) => {
		console.log(id);
		fetch(`http://localhost:5000/org-group`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(id),
		})
			.then(() => deleteMultipleItemsFromData(id))
			.catch((err) => console.log(err));
		message.success(`Success deleted bulk record`);
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
				<UploadButton addMultipleItemsToData={addMultipleItemsToData} />
				<ModalForm buttonLabel='Add' addItemToData={addItemToData} />
				<Popconfirm
					title='Are you sure to delete all selected row?'
					onConfirm={() => onSelectedDelete(selectedRowKeys)}
					onCancel={null}
					okText='Yes'
					cancelText='No'
				>
					<Button
						type='primary'
						disabled={!hasSelected}
						icon={<DeleteOutlined />}
						style={{ marginBottom: 16 }}
						danger
					>
						Delete
					</Button>
				</Popconfirm>
				<span style={{ marginLeft: 8 }}>
					{hasSelected
						? `Selected ${selectedRowKeys.length} items ${selectedRowKeys}`
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
