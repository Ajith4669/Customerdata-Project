import { Button, Form, Input, Select, Card } from "antd";
import React from "react";
import Page from "../utlis/page/page";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const Box = () => {
  const formRef = React.useRef(null);
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        formRef.current?.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "female":
        formRef.current?.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "other":
        formRef.current?.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
        break;
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };
  const onFill = () => {
    formRef.current?.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  return (
    <Page>
      <Card style={{ width: "50%", backgroundColor: "#5A5A5A" }}>
        <Form
          {...layout}
          ref={formRef}
          name="control-ref"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Select" onChange={onGenderChange} allowClear>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              htmlType="button"
              onClick={onReset}
              style={{ marginLeft: "10px" }}
            >
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Page>
  );
};
export default Box;
