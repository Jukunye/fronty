import React, { useState } from "react";
import { Button, Flex, Form, Input, InputNumber, TimePicker } from "antd";
import ChooseTruck from "./ChooseTruck";
import { Typography } from "@mui/material";
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
const WeighOut = ({ truck, onSubmissionSuccess }) => {
  const [putLoading, setPutLoading] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);
  // const [value, setValue] = useState(null);

  const onFinish = async (values) => {
    const weighbridge_out = {
      last_weight: values.last_weight,
      weight_difference: values.weight_difference,
      operator_name: values.operator_name,
      officer_name: values.officer_name,
    };

    truck.weighbridge_out = weighbridge_out;
    truck.status = "cleared";

    try {
      setPutLoading(true); // Set loading to true when POST request starts
      const response = await axios.put(
        `http://54.198.64.165:8000/api/truck/${truck.id}/`,
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
      disabled={formDisabled || truck.weighbridge_out}
      initialValues={truck.weighbridge_out}
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
      {/* <Form.Item
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
      </Form.Item> */}
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
        <Button type="primary" htmlType="submit" loading={putLoading}>
          {putLoading ? "Submitting..." : "Submit"}
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <ChooseTruck link="/weighbridgeout" />
  );
};
export default WeighOut;
