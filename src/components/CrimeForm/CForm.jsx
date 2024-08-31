import React from "react";
import { Form, Input, Radio, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const CForm = () => {
  // Function to validate file type
  const beforeUpload = (file) => {
    const isPdf = file.type === "application/pdf";
    if (!isPdf) {
      // You can use any kind of alert or notification here
      alert("You can only upload PDF files!");
    }
    return isPdf || Upload.LIST_IGNORE;
  };

  return (
    <Form className="text-xl text-black">
      <Form.Item label="Full Name" name="fullname" rules={[{ required: true, message: 'Please enter your full name' }]}>
        <Input type="text" placeholder="Enter Full Name" />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
        <Input type="email" placeholder="Enter Email" />
      </Form.Item>

      <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter your address' }]}>
        <Input type="text" placeholder="Enter Address" />
      </Form.Item>

      <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
        <Input type="tel" placeholder="Enter Phone Number" />
      </Form.Item>

      <Form.Item label="Location" name="location" rules={[{ required: true, message: 'Please enter your location' }]}>
        <Input type="text" placeholder="Enter Location" />
      </Form.Item>

      <Form.Item label="Sector of Cyber Attack" name="fieldOfCyberAttack" rules={[{ required: true, message: 'Please select a field' }]}>
        <Select placeholder="Select Field of Cyber Attack">
          <Option value="network">Network Security</Option>
          <Option value="application">Application Security</Option>
          <Option value="cloud">Cloud Security</Option>
          <Option value="endpoint">Endpoint Security</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Type of Cyber Attack" name="typeOfCyberAttack" rules={[{ required: true, message: 'Please select a type of attack' }]}>
        <Select placeholder="Select Type of Cyber Attack">
          <Option value="phishing">Phishing</Option>
          <Option value="malware">Malware</Option>
          <Option value="ransomware">Ransomware</Option>
          <Option value="ddos">DDoS Attack</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Describe Your Experience" name="experience" rules={[{ required: true, message: 'Please describe your experience' }]}>
        <TextArea rows={4} placeholder="Describe Your Experience" />
      </Form.Item>

      <Form.Item label="Copy of FIR" name="fir" valuePropName="fileList" rules={[{ required: true, message: 'Please upload a copy of FIR' }]}>
        <Upload
          beforeUpload={beforeUpload}
          accept=".pdf"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Upload PDF</Button>
        </Upload>
      </Form.Item>

      <button
        className="px-4 py-2 m-4 font-bold text-white bg-violet-800 shadow-md shadow-black rounded-lg hover:text-violet-800 hover:bg-white"
        type="submit"
      >
        Submit
      </button>

      {/* 
      Uncomment below to add a cancel button
      <button
        className="px-4 py-2 m-4 font-bold text-white bg-neutral-800 border-2 shadow-md shadow-black border-black rounded-lg hover:text-neutral-800 hover:bg-white"
        onClick={() => setEditMode(false)}
      >
        Cancel
      </button> 
      */}
    </Form>
  );
};

export default CForm;