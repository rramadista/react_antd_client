import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const AddFormModal = ({ onCreate, visible, setVisible }) => {
	const [form] = Form.useForm();

	const initValue = { id: '', code: '', name: '' };
	const [formValues, setFormValues] = useState(initValue);

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<>
			<Button
				type='primary'
				onClick={() => setVisible(true)}
				style={{ marginBottom: 16 }}
			>
				Add
			</Button>
			<Modal
				visible={visible}
				title='Create A New Collection'
				cancelText='Cancel'
				onCancel={() => setVisible(false)}
				okText='Create'
				onOk={() => {
					form.validateFields()
						.then((values) => {
							form.resetFields();
							onCreate(values);
						})
						.catch((info) => {
							console.log('Validate Failed: ', info);
						});
				}}
			>
				<Form form={form} layout='vertical'>
					<Form.Item name='id'>
						<Input
							placeholder='Org Group ID'
							style={{ width: 160 }}
							onChange={onChange}
							value={formValues.id}
						/>
					</Form.Item>
					<Form.Item name='code'>
						<Input
							placeholder='Org Group Code'
							style={{ width: 160 }}
							onChange={onChange}
							value={formValues.code}
						/>
					</Form.Item>
					<Form.Item name='name'>
						<Input
							placeholder='Org Group Name'
							onChange={onChange}
							value={formValues.name}
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default AddFormModal;
