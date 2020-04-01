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
import GridListTileBar from "@material-ui/core/GridListTileBar";
import DeleteIcon from '@material-ui/icons/Delete';

import CustomTooltip from "./CustomTooltip";

import CustomizedAxisTick from "./CustomizedAxisTick";
import { Button } from "@material-ui/core";

export default class Graph extends Component {

  handleDelete = name => {
   console.log(name)
    
  };

  render() {
    const graphData = this.props.data;
    return (
      <div>
        <GridList cellHeight={320} cols={1} width="100%">
          {graphData.map(el => (
            <GridListTile key={el[0].name} width="100%">
              <GridListTileBar
                title={
                <Button style={{zIndex: "999"}} variant="outlined" color="secondary" startIcon={<DeleteIcon />} onClick={ e=> this.handleDelete(el[0].name)}>
                    {`delete ${el[0].name} graph`}
                  </Button>
                }
                style={{
                  background: "white"
                }}
              />
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={el}
                  margin={{ top: 20, right: 30, left: 25, bottom: 55 }}
                >
                  <Line type="monotone" dataKey="price" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis
                    dataKey="date"
                    interval={1}
                    tick={<CustomizedAxisTick />}
                  />
                  <YAxis dataKey="price" />
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
