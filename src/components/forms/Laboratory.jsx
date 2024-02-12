import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Select, TimePicker } from "antd";
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
const Laboratory = ({ truck, onSubmissionSuccess }) => {
  const [putLoading, setPutLoading] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  const onFinish = async (values) => {
    const quality_control = {
      sample_type: values.sample_type,
      sample_temperature: values.sample_temperature,
      notes: values.notes,
      inspector_name: values.inspector_name,
      sampler_name: values.sampler_name,
      chemist_name: values.chemist_name,
      sample_number: values.sample_number,
      SMP: values.SMP,
      MIV: values.MIV,
      FFA: values.FFA,
      COLOR_B: values.COLOR_B,
      COLOR_Y: values.COLOR_Y,
      COLOR_R: values.COLOR_R,
      IV: values.IV,
    };

    truck.quality_control = quality_control;

    try {
      setPutLoading(true); // Set loading to true when POST request starts
      const response = await axios.put(
        `http://127.0.0.1:8000/api/truck/${truck.id}/`,
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
      disabled={formDisabled}
    >
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Sample type
          </Typography>
        }
        name="sample_type"
        rules={[
          {
            required: true,
            message: "Select sample type!",
          },
        ]}
      >
        <Select>
          <Select.Option value="CPO">CPO</Select.Option>
          <Select.Option value="CPKO">CPKO</Select.Option>
          <Select.Option value="stearin">Stearin</Select.Option>
          <Select.Option value="water">Water</Select.Option>
          <Select.Option value="sludge">Sludge</Select.Option>
          <Select.Option value="caustic">Caustic</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Sample temparature
          </Typography>
        }
        name="sample_temperature"
        rules={[
          {
            required: true,
            message: "Sample temperature required!",
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
            Inspector name
          </Typography>
        }
        name="inspector_name"
        rules={[
          {
            required: true,
            message: "Inspector name required!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Sampler name
          </Typography>
        }
        name="sampler_name"
        rules={[
          {
            required: true,
            message: "Sampler name required!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Sampling time
          </Typography>
        }
        name="sampling_time"
        rules={[
          {
            required: true,
            message: "Sampling time required!",
          },
        ]}
      >
        <TimePicker value={value} onChange={onChange} />
      </Form.Item> */}

      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Chemist name
          </Typography>
        }
        name="chemist_name"
        rules={[
          {
            required: true,
            message: "Chemist name required!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Sample number
          </Typography>
        }
        name="sample_number"
        rules={[
          {
            required: true,
            message: "Sample number required!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            Result time
          </Typography>
        }
        name="result_time"
        rules={[
          {
            required: true,
            message: "Result time required!",
          },
        ]}
      >
        <TimePicker value={value} onChange={onChange} />
      </Form.Item> */}

      <Form.Item
        label={
          <Typography variant="body2" style={{ fontSize: "14px" }}>
            SMP
          </Typography>
        }
        name="SMP"
        rules={[
          {
            required: true,
            message: "SMP required!",
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
            MIV
          </Typography>
        }
        name="MIV"
        rules={[
          {
            required: true,
            message: "MIV required!",
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
            FFA
          </Typography>
        }
        name="FFA"
        rules={[
          {
            required: true,
            message: "FFA required!",
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
            COLOR_B
          </Typography>
        }
        name="COLOR_B"
        rules={[
          {
            required: true,
            message: "COLOR_B required!",
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
            COLOR_Y
          </Typography>
        }
        name="COLOR_Y"
        rules={[
          {
            required: true,
            message: "COLOR_Y required!",
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
            COLOR_R
          </Typography>
        }
        name="COLOR_R"
        rules={[
          {
            required: true,
            message: "COLOR_R required!",
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
            IV
          </Typography>
        }
        name="IV"
        rules={[
          {
            required: true,
            message: "IV required!",
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
            Result out
          </Typography>
        }
        name="result_out"
        rules={[
          {
            required: true,
            message: "Result out required!",
          },
        ]}
      >
        <TimePicker value={value} onChange={onChange} />
      </Form.Item> */}

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
    <ChooseTruck link="/lab" />
  );
};
export default Laboratory;
