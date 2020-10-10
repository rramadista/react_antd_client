import React, { useState } from 'react';
import { Space } from 'antd';

import DataTable from '../../components/data-table/data-table.component';
import DownloadButton from '../../components/download-button/download-button.component';
import UploadButton from '../../components/upload-button/upload-button.component';
import ModalButton from '../../components/modal-button/modal-button.component';
import DeleteSelectionButton from '../../components/delete-selection-button/delete-selection-button.component';

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

	const onSelectChange = (selectedRowKeys) => {
		console.log(`selectedRowKeys changed: `, selectedRowKeys);
		setSelectedRowKeys(selectedRowKeys);
	};

	const rowSelection = { selectedRowKeys, onChange: onSelectChange };

	return (
		<>
			<Space>
				<DownloadButton data={data} filename='org-group' />
				<UploadButton addMultipleItemsToData={addMultipleItemsToData} />
				<ModalButton buttonLabel='Add' addItemToData={addItemToData} />
				<DeleteSelectionButton
					selectedRowKeys={selectedRowKeys}
					setSelectedRowKeys={setSelectedRowKeys}
					deleteMultipleItemsFromData={deleteMultipleItemsFromData}
				/>
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
