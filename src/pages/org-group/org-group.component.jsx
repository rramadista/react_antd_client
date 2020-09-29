import React, { useState } from 'react';
import { Space } from 'antd';

import ModalForm from '../../components/modal-form/modal-form.component';
import DataTable from '../../components/data-table/data-table.component';
import DownloadButton from '../../components/download-button/download-button.component';
import UploadButton from '../../components/upload-button/upload-button.component';

const OrgGroupPage = () => {
	const [data, setData] = useState([]);

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

	return (
		<>
			<Space>
				<DownloadButton data={data} filename='org-group' />
				<UploadButton />
				<ModalForm buttonLabel='Add' addItemToData={addItemToData} />
			</Space>
			<DataTable
				data={data}
				setData={setData}
				updateDataItem={updateDataItem}
				deleteItemFromData={deleteItemFromData}
			/>
		</>
	);
};

export default OrgGroupPage;
