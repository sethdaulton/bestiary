var xarray = [{{str}},{{dex}},{{con}},{{wis}},{{int}},{{chr}}];

data = [{
  type: 'scatterpolar',
  r: xarray,
  theta: ['STR', 'DEX', 'CON', 'WIS', 'INT', 'CHR'],
  fill: 'toself'
}]

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 30]
    }
  },
  showlegend: false
}

Plotly.newPlot("myDiv", data, layout) 