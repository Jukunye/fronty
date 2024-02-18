import React, { useEffect } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  DatePicker,
  TimePicker,
  Select,
} from "antd";
import { Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import moment from "moment";

const { useForm } = Form;

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

const General = ({ truck, onSubmissionSuccess }) => {
  const [postLoading, setPostLoading] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  const [form] = useForm(); // Get the form object from antd Form

  // Load values into form if weighbridge_in is not null
  useEffect(() => {
    if (truck && truck.general_info) {
      const truckInfo = {
        driver: truck.driver,
        cab_plate: truck.cab_plate,
        trailer_plate: truck.trailer_plate,
        delivery_number: truck.general_info.delivery_number,
        loading_date: moment(truck.general_info.loading_date),
        fuel_gauge: truck.general_info.fuel_gauge,
        water_reservoir: truck.general_info.water_reservoir,
        number_of_seals: truck.general_info.number_of_seals,
        seals_condition: truck.general_info.seals_condition,
        sealing_condition: truck.general_info.sealing_condition,
        seals_identification: truck.general_info.seals_identification,
        officer_name: truck.general_info.officer_name,
      };
      form.setFieldsValue(truckInfo);
      // const newData = { ...truck.general };
      // delete newData["id"];
      // delete newData["time_in"];
      // delete newData["time_out"];
    }
  }, [truck, form]);

  const onFinish = async (values) => {
    const truckData = {
      driver: values.driver,
      cab_plate: values.cab_plate,
      trailer_plate: values.trailer_plate,
      general_info: {
        delivery_number: values.delivery_number,
        loading_date: values.loading_date.format("YYYY-MM-DD"),
        fuel_gauge: values.fuel_gauge,
        water_reservoir: values.water_reservoir,
        number_of_seals: values.number_of_seals,
        seals_condition: values.seals_condition,
        sealing_condition: values.sealing_condition,
        seals_identification: values.seals_identification,
        officer_name: values.officer_name,
      },
      weighbridge_in: null,
      quality_control: null,
      tankfarm: null,
      weighbridge_out: null,
    };

    try {
      setPostLoading(true); // Set loading to true when POST request starts
      const response = await axios.post(
        "http://localhost:8000/api/trucks/",
        truckData
      );
      // console.log("Post response:", response.data);
      // Perform any actions needed after successful post
      onSubmissionSuccess();
      setPostLoading(false); // Set loading to false after successful POST request
      setFormDisabled(true);
    } catch (error) {
      // console.error("Error posting data:", error);
      setPostLoading(false); // Set loading to false if there's an error
    }
  };

  // const [value, setValue] = useState(null);
  // const onChange = (time) => {
  //   setValue(time);
  // };
  return (
    <Form
      {...formItemLayout}
      variant="filled"
      style={{
        maxWidth: 700,
        padding: 12,
      }}
      onFinish={onFinish}
      disabled={formDisabled || truck}
      form={form}
    >
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Driver Name
          </Typography>
        }
        name="driver"
        rules={[
          {
            required: true,
            message: "Driver name required!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Cab plate
          </Typography>
        }
        name="cab_plate"
        rules={[
          {
            required: true,
            message: "Cab plate required!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Trailer plate
          </Typography>
        }
        name="trailer_plate"
        rules={[
          {
            required: true,
            message: "Trailer plate required!",
          },
        ]}
      >
        <Input />
      </Form.Item>
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
            Loading date
          </Typography>
        }
        name="loading_date"
        rules={[
          {
            required: true,
            message: "Loading date required!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Fuel guage
          </Typography>
        }
        name="fuel_gauge"
        rules={[
          {
            required: true,
            message: "Select fuel guage!",
          },
        ]}
      >
        <Select>
          <Select.Option value="empty">Empty</Select.Option>
          <Select.Option value="half">Half</Select.Option>
          <Select.Option value="full">Full</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Water reservoir
          </Typography>
        }
        name="water_reservoir"
        rules={[
          {
            required: true,
            message: "Select water level!",
          },
        ]}
      >
        <Select>
          <Select.Option value="empty">Empty</Select.Option>
          <Select.Option value="half">Half</Select.Option>
          <Select.Option value="full">Full</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Number of seals
          </Typography>
        }
        name="number_of_seals"
        rules={[
          {
            required: true,
            message: "Number of seals required!",
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
            Seals condition
          </Typography>
        }
        name="seals_condition"
        rules={[
          {
            required: true,
            message: "Seals condition required!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Sealing condition
          </Typography>
        }
        name="sealing_condition"
        rules={[
          {
            required: true,
            message: "Sealing condition required!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Seals identification
          </Typography>
        }
        name="seals_identification"
        rules={[
          {
            required: true,
            message: "Seals identification required!",
          },
        ]}
      >
        <Input />
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
        <Button type="primary" htmlType="submit" loading={postLoading}>
          {postLoading ? "Submitting..." : "Submit"}
        </Button>
      </Form.Item>
    </Form>
  );
};
export default General;
