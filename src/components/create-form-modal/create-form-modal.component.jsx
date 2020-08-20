import React from 'react';
import { Form, Input, Modal, Radio, Select, DatePicker } from 'antd';

const layout = {
	labelCol: {
		span: 6,
	},
	wrapperCol: {
		span: 18,
	},
};

const tailLayout = {
	wrapperCol: {
		offset: 6,
		span: 18,
	},
};

const CreateFormModal = ({ visible, onCreate, onCancel }) => {
	const [form] = Form.useForm();

	return (
		<Modal
			width={800}
			visible={visible}
			title='Create a new collection'
			okText='Create'
			cancelText='Cancel'
			onCancel={onCancel}
			onOk={() => {
				form.validateFields()
					.then((values) => {
						form.resetFields();
						onCreate(values);
					})
					.catch((info) => {
						console.log('Validate Failed:', info);
					});
			}}
		>
			<Form
				{...layout}
				form={form}
				layout='vertical'
				name='form_in_modal'
				initialValues={{
					modifier: 'public',
				}}
			>
				<Form.Item
					name='name'
					label='Branch Name'
					rules={[
						{
							required: true,
							message: 'Please input the title of collection!',
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item {...tailLayout} name='status'>
					<Radio.Group>
						<Radio value='KC'>KC</Radio>
						<Radio value='KCP'>KCP</Radio>
						<Radio value='KK'>KK</Radio>
						<Radio value='KF'>KF</Radio>
						<Radio value='Kanwil'>Kanwil</Radio>
						<Radio value='KPNO'>KPNO</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item label='Regional'>
					<Select>
						<Select.Option value='demo'>Regional X</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item label='Area'>
					<Select>
						<Select.Option value='demo'>Area 1</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item label='Start Date'>
					<DatePicker />
				</Form.Item>
				<Form.Item name='description' label='Description'>
					<Input type='textarea' />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default CreateFormModal;
