import React from 'react';
import { Button } from 'antd';
import { FileExcelOutlined } from '@ant-design/icons';
import { CSVLink } from 'react-csv';

const DownloadButton = ({ data, filename }) => {
	return (
		<Button
			icon={<FileExcelOutlined />}
			style={{ marginBottom: 16, color: 'green' }}
		>
			<CSVLink data={data} filename={`${filename}.csv`}>
				Download
			</CSVLink>
		</Button>
	);
};

export default DownloadButton;
