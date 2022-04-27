import Plot from 'react-plotly.js';
import React, { Component } from 'react';

export default class ScatterPlot extends Component {
    render() {
        console.log(this.props.allX)
          return (
              <div>
            <Plot
              data ={[
                {
                mode: "markers",
                type: "scatter",
                x: this.props.allX,
                y: this.props.allY,
                text: this.props.names,
                hovermode: "closest",
                hovertemplate:  "<b>%{text}</b><br><br>" +
                "%{yaxis.title.text}: %{y:,.0f}<br>" +
                "%{xaxis.title.text}: %{x:.}<br>" +
                "<extra></extra>"
                
            },
            {
                mode: "marker",
                type: "scatter",
                x: [this.props.selX],
                y: [this.props.selY],
                text: [this.props.selName],
                marker:{color:"rgba(200, 50, 100, .7)", size:16},
                hovermode: "closest",
                hovertemplate:  "<b>%{text}</b><br><br>" +
                "%{yaxis.title.text}: %{y:,.0f}<br>" +
                "%{xaxis.title.text}: %{x:.}<br>" +
                "<extra></extra>"
                
            }
        ]}
        
            layout = {{
                title: "All fighters",
                hovermode: "closest",
                showlegend: false,
                height: 600,
                width: 600,
                xaxis: {
                    title: {
                    text: `${this.props.XAxis}`,
                    font: {
                        family: "Courier New, monospace",
                        size: 18,
                        color: "#7f7f7f"
                    }
                    },
                },
                yaxis: {
                    title: {
                    text: `${this.props.YAxis}`,
                    font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                    }
                    }
                }
                }}
            />
            </div>
          );
        }
      }