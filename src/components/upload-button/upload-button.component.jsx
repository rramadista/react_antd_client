import React from 'react';
import { Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import papa from 'papaparse';

const UploadButton = ({ addMultipleItemsToData }) => {
	const onUpload = (values) => {
		console.log(values);
		fetch(`http://localhost:5000/org-group/bulk`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(values),
		})
			.then((res) => res.json())
			.then(() => addMultipleItemsToData(values))
			.catch((err) => console.log(err));
		message.success(`Success created bulk record`);
	};

	return (
		<Upload
			accept='.txt, .csv'
			showUploadList={false}
			beforeUpload={(file) => {
				const reader = new FileReader();

				reader.onload = (e) => {
					const files = papa.parse(e.target.result, {
						header: true,
						skipEmptyLines: true,
					});
					onUpload(files.data);
				};

				reader.readAsText(file);

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
