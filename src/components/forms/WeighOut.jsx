import React, { useState } from "react";
import { Button, Flex, Form, Input, InputNumber, TimePicker } from "antd";
import ChooseTruck from "./ChooseTruck";
import { Typography } from "@mui/material";

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
const WeighOut = (props) => {
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
    >
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Last weight
          </Typography>
        }
        name="last_weight"
        rules={[
          {
            required: true,
            message: "Last weight required!",
          },
        ]}
      >
        <InputNumber
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Weight difference
          </Typography>
        }
        name="weight_difference"
        rules={[
          {
            required: true,
            message: "Weight difference required!",
          },
        ]}
      >
        <InputNumber
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Time
          </Typography>
        }
        name="time"
        rules={[
          {
            required: true,
            message: "Time required!",
          },
        ]}
      >
        <TimePicker value={value} onChange={onChange} />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Operator name
          </Typography>
        }
        name="operator_name"
        fontSize="10px"
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
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Officer name
          </Typography>
        }
        name="officer_name"
        rules={[
          {
            required: true,
            message: "Officer name required!",
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
    <ChooseTruck link="/weighbridgeout" />
  );
};
export default WeighOut;
