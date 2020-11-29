import React, { useContext } from 'react';
import papa from 'papaparse';
import { Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { DataTableContext } from '../../services/hooks/data-table/data-table.context';

const UploadButton = () => {
	const { addMultipleItemsToData } = useContext(DataTableContext);

	const onUpload = async (values) => {
		console.log(values);
		try {
			await fetch(`http://localhost:5000/org-group/bulk`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			})
				.then((res) => res.json())
				.then(() => addMultipleItemsToData(values));
			message.success(`Success created bulk record`);
		} catch (err) {
			message.error(`Error created bulk record`);
		}
	};

	return (
		<Upload
			accept='.txt, .csv'
			showUploadList={false}
			beforeUpload={(file) => {
				if (file.type !== 'application/vnd.ms-excel') {
					message.error('You can only upload XLS or CSV file');
				} else {
					const reader = new FileReader();

					reader.onload = (e) => {
						const files = papa.parse(e.target.result, {
							header: true,
							skipEmptyLines: true,
						});
						onUpload(files.data);
					};

					reader.readAsText(file);
				}

				return false;
			}}
		>
			<Button icon={<UploadOutlined />} style={{ marginBottom: 16 }}>
				Upload
			</Button>
		</Upload>
	);
};

export default UploadButton;
