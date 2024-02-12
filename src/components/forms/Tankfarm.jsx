import React from "react";
import { Button, Form, Input, TimePicker } from "antd";
import ChooseTruck from "./ChooseTruck";
import { Typography } from "@mui/material";
import { useState } from "react";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const Tankfarm = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [value, setValue] = useState(null);
  const onChange = (time) => {
    setValue(time);
  };
  return props.truck ? (
    <Form
      {...formItemLayout}
      variant="filled"
      style={{
        maxWidth: 700,
        padding: 12,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Time in
          </Typography>
        }
        name="time_in"
        rules={[
          {
            required: true,
            message: "Time in required!",
          },
        ]}
      >
        <TimePicker value={value} onChange={onChange} />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Time out
          </Typography>
        }
        name="time_out"
        rules={[
          {
            required: true,
            message: "Time out required!",
          },
        ]}
      >
        <TimePicker value={value} onChange={onChange} />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Notes
          </Typography>
        }
        name="notes"
        rules={[
          {
            required: true,
            message: "Notes required!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Operator name
          </Typography>
        }
        name="operator_name"
        rules={[
          {
            required: true,
            message: "Operator name required!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 16,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <ChooseTruck link="/tankfarm" />
  );
};
export default Tankfarm;
