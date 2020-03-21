import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import CustomTooltip from './CustomTooltip'

export default class Graph extends Component {
  render() {
    const graphData = this.props.data;
    return (
      <div>
        <ResponsiveContainer width="100%" height={300} >
          <LineChart data={graphData}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis dataKey="price" />
            <Tooltip content={<CustomTooltip />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
