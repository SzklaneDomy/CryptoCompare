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
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import CustomTooltip from "./CustomTooltip";
import { GridListTileBar } from "@material-ui/core";

import CustomizedAxisTick from './CustomizedAxisTick'

export default class Graph extends Component {
  render() {
    const graphData = this.props.data;
    return (
      <div>
        <GridList cellHeight={400} cols={1} width="100%">
          {graphData.map(el => (
            <GridListTile key={el.name} width="100%">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={el}>
                  <Line type="monotone" dataKey="price" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="date" tick={<CustomizedAxisTick />}/>
                  <YAxis dataKey="price"/>
                  <Tooltip content={<CustomTooltip />} />
                </LineChart>
              </ResponsiveContainer>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}
