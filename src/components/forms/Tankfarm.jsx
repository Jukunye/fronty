import React from "react";
import { Button, Form, Input, TimePicker } from "antd";
import ChooseTruck from "./ChooseTruck";
import { Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

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
const Tankfarm = ({ truck, onSubmissionSuccess }) => {
  const [putLoading, setPutLoading] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);
  // const [value, setValue] = useState(null);

  const onFinish = async (values) => {
    const tankfarm = {
      notes: values.notes,
      operator_name: values.operator_name,
    };

    truck.tankfarm = tankfarm;

    try {
      setPutLoading(true); // Set loading to true when POST request starts
      const response = await axios.put(
        `http://localhost:8000/api/truck/${truck.id}/`,
        truck
      );
      // console.log("Post response:", response.data);
      // Perform any actions needed after successful post
      onSubmissionSuccess();
      setPutLoading(false); // Set loading to false after successful POST request
      setFormDisabled(true);
    } catch (error) {
      // console.error("Error posting data:", error);
      setPutLoading(false); // Set loading to false if there's an error
    }
  };

  // const onChange = (time) => {
  //   setValue(time);
  // };
  return truck ? (
    <Form
      {...formItemLayout}
      variant="filled"
      style={{
        maxWidth: 700,
        padding: 12,
      }}
      onFinish={onFinish}
      disabled={formDisabled || truck.tankfarm}
      initialValues={truck.tankfarm}
    >
      {/* <Form.Item
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
      </Form.Item> */}
      {/* <Form.Item
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
      </Form.Item> */}
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
        <Button type="primary" htmlType="submit" loading={putLoading}>
          {putLoading ? "Submitting..." : "Submit"}
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <ChooseTruck link="/tankfarm" />
  );
};
export default Tankfarm;
