import React from 'react';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadButton = () => {
	return (
		<Upload>
			<Button icon={<UploadOutlined />} style={{ marginBottom: 16 }}>
				Upload
			</Button>
		</Upload>
	);
};

export default UploadButton;
