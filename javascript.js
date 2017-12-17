


           d3.json("test.json",
           function(error, data) {


                var players = d3.select("#field")
                                .selectAll("g.shirt")
                                .data(data)



  //chartjs defense
                                var ctx = document.getElementById('defense').getContext('2d');

                                var chart = new Chart(ctx, {
                                    // The type of chart we want to create
                                    type: 'bar',

                                    // The data for our dataset
                                    data: {
                                        labels: ['Tackles',	'Interceptions',	'Fouls',	'Offsides',	'Clearances',	'Dribbles'],
                                        datasets: [{
                                            label: "Defense",
                                            backgroundColor: '#386396',
                                            borderColor: '#386396',
                                            data: [0, 0, 0, 0, 0, 0],
                                        }]
                                    },

                                    // Configuration options go here
                                    options: {

                                      responsive: false,


                                            scales: {
                                            yAxes: [{
                                                ticks: {
                                                    // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
                                                    min: 0,
                                                    // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
                                                    max: 8



                                                  }
                                                }]
                                               }
                                              }
                                            }
                                          );


//chartjs offense

                      var ctx1 = document.getElementById('offense').getContext('2d');

                      var chart1 = new Chart(ctx1, {
                          // The type of chart we want to create
                          type: 'bar',

                          // The data for our dataset
                          data: {
                              labels: ["Shots",	"Key Passes",	"Offsides",	"Disposed",	"Crosses",	"Long Balls"],
                              datasets: [{
                                  label: "Offense",
                                  backgroundColor: '#386396',
                                  borderColor: '#386396',
                                  data: [0, 0, 0, 0, 0, 0],
                              }]
                          },

                          // Configuration options go here
                          options: {

                            responsive: false,

                            scales: {
                            yAxes: [{
                                ticks: {
                                    // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
                                    min: 0,
                                    // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
                                    max: 8



                          }
                        }]
                       }
                      }
                    }
                  );







                      function render(data, jerseynumber) {



                    var info = data.filter(function(d){return d.jerseynumber == jerseynumber;});



                    function updateOData(chart) {
                      chart.data.datasets[0].data[0] = info[0].spg;
                      chart.data.datasets[0].data[1] = info[0].keyp;
                      chart.data.datasets[0].data[2] = info[0].off;
                      chart.data.datasets[0].data[3] = info[0].disp;
                      chart.data.datasets[0].data[4] = info[0].crosses;
                      chart.data.datasets[0].data[5] = info[0].longb;
                      chart.update();
                  }




                function updateDData(chart) {
                  chart.data.datasets[0].data[0] = info[0].tackles;
                  chart.data.datasets[0].data[1] = info[0].inter;
                  chart.data.datasets[0].data[2] = info[0].fouls;
                  chart.data.datasets[0].data[3] = info[0].offsides;
                  chart.data.datasets[0].data[4] = info[0].clear;
                  chart.data.datasets[0].data[5] = info[0].blocks;
                  chart.update();
              }


              updateDData(chart);
              updateOData(chart1);


            }





           function selector(jerseynumber) {
                    render(data, jerseynumber);

                }




                      players.enter()
                            .append("g")
                            .attr("class", "shirt")
                            .attr("transform", function (d) { return "translate(" + d.xvalue + "," + d.yvalue + ")" ;})
                            .append("path")
                            .attr("d","M22-.33H52l.42,0c.75.09,1.5.13,2.24.28a15.81,15.81,0,0,1,8.26,4.45l10.2,10.21a2.65,2.65,0,0,1,0,4l-6.59,6.59a2.66,2.66,0,0,1-4,0L58.4,21.09l-.22-.21v.39q0,15.54,0,31.08a6.06,6.06,0,0,1-.12,1.29,5.26,5.26,0,0,1-5.25,4.21H21.25a5.4,5.4,0,0,1-2.12-.41,5.31,5.31,0,0,1-3.25-5q0-15.58,0-31.15v-.37l-.26.24-4.15,4.15a2.64,2.64,0,0,1-3.91,0L.86,18.59a2.75,2.75,0,0,1-.79-1.43C0,17,0,16.85,0,16.69v-.1a.32.32,0,0,0,0-.09,2.86,2.86,0,0,1,1-1.92L11.1,4.48c.29-.29.58-.58.89-.84A15.71,15.71,0,0,1,21-.23ZM28.45,5c2.2,3.63,5.27,5.6,9.58,5.21,3.46-.32,5.82-2.3,7.57-5.21Z")
                            .on('click', function (d) {return selector(d.jerseynumber);})


    //Jerseylogo
                    players.append("circle")
                            .attr("cx", 50)
                            .attr("cy", 18)
                            .attr("r", 3.5)
                            .attr("stroke", "gold")
                            .attr("stroke-width", 1.5);


    //Jerseynumber

                       players.append("text")
                              .text(function (d) {return d.jerseynumber;})
                              .attr("x", 37)
                              .attr("y", 48)
                              .attr("font-size", 25)
                              .attr("fill", "black")
                              .attr("font-family", "Roboto")
                              .attr("font-weight", "bold")
                              .attr("text-anchor", "middle");
    //Jerseyname
                         players.append("text")
                                .text(function (d) {return d.player;})
                                .attr("x", 37)
                                .attr("y", -10)
                                .attr("font-size", 12)
                                .attr("fill", "white")
                                .attr("font-family", "Roboto")
                                .attr("text-anchor", "middle");


           var tip = d3.tip()
                                .attr('class', 'd3-tip')
                                .style("visibility","visible")
                                .offset([-10, 0])
                                .direction('e')
                                .html(function(d) {
                                  return "<b>Height: </b>" + d.height +"cm"
                                  + "<br><b>Weight: </b>" +d.weight +"kg"
                                  + "<br><b>Apps: </b>" +d.apps
                                  + "<br><b>Minutes: </b>" +d.mins
                                  + "<br><b>Goals: </b>" +d.goals
                                  ;
                                });

                tip(players.append("g"));



                      players.on('mouseover', tip.show)
                             .on('mouseout', tip.hide);







           });
