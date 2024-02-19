// import React, { useEffect } from "react";
import { Button, Form, Input, InputNumber, TimePicker } from "antd";
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
const WeighIn = ({ truck, onSubmissionSuccess }) => {
  const [putLoading, setPutLoading] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);
  // const [initialData, setInitialData] = useState({});
  // let dat = {};

  // // Load values into form if weighbridge_in is not null
  // useEffect(() => {
  //   if (truck && truck.weighbridge_in) {
  //     const newData = { ...truck.weighbridge_in };
  //     delete newData["id"];
  //     delete newData["time_in"];
  //     delete newData["time_out"];
  //     setInitialData(newData);
  //     dat = { ...newData };
  //   }
  // }, [truck]);

  // console.log(initialData);
  const onFinish = async (values) => {
    const weighbridge_in = {
      delivery_number: values.delivery_number,
      first_weight: values.first_weight,
      operator_name: values.operator_name,
      officer_name: values.officer_name,
    };

    truck.weighbridge_in = weighbridge_in;
    truck.status = "Lab";

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

  // const [value, setValue] = useState(null);
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
      disabled={formDisabled || truck.weighbridge_in}
      initialValues={truck.weighbridge_in}
    >
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Delivery number
          </Typography>
        }
        name="delivery_number"
        rules={[
          {
            required: true,
            message: "Delivery number required!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            First weight
          </Typography>
        }
        name="first_weight"
        rules={[
          {
            required: true,
            message: "Weight required!",
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
      </Form.Item> */}

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
    <ChooseTruck link="/weighbridgein" />
  );
};
export default WeighIn;
