  <script type="text/javascript" src="//www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load('visualization', '1', {packages: ['corechart']});
    </script>
    <script type="text/javascript">
      function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
          ['Department', 'Women\'s Average Salary as a Percentage of Men\'s', { role: 'style' }, { role: 'annotation' } ],
                ['Total',  .9, 'color: #08b2c9', '90%' ],
                ['Fire',  .72, 'color: #a2c4c9', '72%' ],
                ['Police',  .74, 'color: #a2c4c9', '74%' ],
                ['Sanitation',  .81, 'color: #a2c4c9', '81%' ],
                ['Finance',  .82, 'color: #a2c4c9', '82%' ],
                ['Design & Construction',  .86, 'color: #a2c4c9', '86%' ],
                ['Housing Preservation & Development',  .87, 'color: #a2c4c9', '87%' ],
                ['Social Services',  .89, 'color: #a2c4c9', '89%' ],
                ['Environmental Protection',  .9, 'color: #a2c4c9', '90%' ],
                ['District Attorney',  .9, 'color: #a2c4c9', '90%' ],
                ['Housing Authority',  .9, 'color: #a2c4c9', '90%'],
                ['Law',  .91, 'color: #a2c4c9', '91%'],
                ['Education Administration',  .94, 'color: #a2c4c9', '94%'],
                ['Citywide Admin Services',  .97, 'color: #a2c4c9', '97%'],
                ['Health & Mental Hygiene',  .98, 'color: #a2c4c9', '98%'],
                ['Transportation',  .98, 'color: #a2c4c9', '98%'],
                ['Children\'s Services',  .98, 'color: #a2c4c9', '98%'],
                ['Manhattan Community College',  .99, 'color: #a2c4c9', '99%'],
                ['Parks & Recreation',  1.02, 'color: #a2c4c9', '102%'],
                ['Corrections',  1.02, 'color: #a2c4c9', '102%'],
                ['Homeless Services',  1.05, 'color: #a2c4c9', '105%']
        ]);
        
      
     
        	var options={ 
                  width:800, height:1000,
                  vAxis: {format:'#%'},
                  hAxis: {format:'#%', ticks: [1], minValue: .6},
                  colors: ['#a2c4c9'],
                  fontSize: [ 12 ],
                  chartArea: {left:220,top:5,width:"50%"},
                  tooltip: {trigger:'none'},
        		};


    
        // Create and draw the visualization.
        var chart= new google.visualization.BarChart(document.getElementById('visualization'));chart.draw(data, options);

      }
      


      google.setOnLoadCallback(drawVisualization);

    </script>