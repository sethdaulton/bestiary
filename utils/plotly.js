data = [{
    type: 'scatterpolar',
    r: [39, 28, 8, 7, 28, 39],
    theta: ['A','B','C', 'D', 'E', 'A'],
    fill: 'toself'
  }]
  
  layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 50]
      }
    },
    showlegend: false
  }
  
  Plotly.newPlot("myDiv", data, layout)