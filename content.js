/* EDIT THIS FILE to update your profile, project descriptions and image captions.
   Replace files in assets/ to change pictures, or change each image's src below.
   Set placeholder: false after replacing a sample with your own project image. */
window.PORTFOLIO = {
  name: 'Shehab Uddin',
  title: 'Mechanical Design & Analysis',
  location: 'Cambridge, Ontario, Canada',
  email: 'shehab.uwindsor@gmail.com',
  linkedin: 'https://www.linkedin.com/in/suddin01/',
  introduction: 'Mechanical design, detailed drawings and engineering analysis for industrial equipment. My work connects CAD development with fabrication, assembly and performance.',
  biography: 'I bring together mechanical design and thermofluid analysis, with experience in custom air handling units, mining equipment and reactor research.',
  credentials: ['MASc · Mechanical Engineering', 'Certified SolidWorks Professional'],
  projects: [
    { id: 'mafna', number: '01', category: 'INDUSTRIAL EQUIPMENT', title: 'Custom air handling units', organization: 'Mafna Air Technologies', role: 'Mechanical Engineer — Design and Application',
      description: 'Design and application work for custom air handling units serving hospitals, schools and industrial facilities, from equipment sizing to production documentation.',
      contribution: 'Engineering calculations, 3D assemblies, sheet metal and weldments, general arrangement drawings, fabrication details and coordination with production teams.',
      tools: ['SolidWorks', 'AutoCAD', 'Sheet metal', 'BOMs'],
      groups: [
        { title: 'Project A · AHU assembly & layout', images: [
          {src:'assets/01.jpg', title:'Assembly model', detail:'Custom AHU · 3D assembly view', placeholder:true},
          {src:'assets/02.jpg', title:'General arrangement', detail:'Equipment layout · orthographic views', placeholder:true}]},
        { title: 'Project B · Fabrication & detailing', images: [
          {src:'assets/03.jpg', title:'Sheet metal assembly', detail:'Enclosure and component arrangement', placeholder:true},
          {src:'assets/04.jpg', title:'Fabrication drawing', detail:'Part details and manufacturing documentation', placeholder:true}]}
      ]
    },
    { id:'bjit', number:'02', category:'MINING & HEAVY EQUIPMENT', title:'Mining components & system routing', organization:'BJIT Limited · Client: Metso Finland', role:'Mechanical Design Engineer',
      description:'Mechanical component design and manufacturing documentation for heavy industrial mining equipment, with CAD data managed in Siemens Teamcenter.',
      contribution:'3D component modeling, detailed 2D drawings, GD&T, bills of materials and support for hydraulic and electrical routing. Collaboration with European clients and manufacturing teams.',
      tools:['Siemens NX','SolidWorks','Teamcenter','GD&T'], groups:[{title:'Component design & documentation',images:[
        {src:'assets/05.JPG',title:'Modeling Improvements',detail:'Component geometry · CAD model',placeholder:false},
        {src:'assets/06.JPG',title:'Drawing Modifications',detail:'Orthographic and section views',placeholder:false},
        {src:'assets/07.JPG',title:'Electrical-Hydraulic Routing',detail:'System layout and integration',placeholder:false},
        {src:'assets/08.JPG',title:'Teamcenter PLM Integration',detail:'Crusher component · machined geometry',placeholder:false}]}]
    },
    {id:'research',number:'03',category:'THERMOFLUIDS & SIMULATION',title:'Reactor modeling & analysis',organization:'University of Windsor · Ekona Power collaboration',role:'Graduate Research Assistant',
      description:'Research in reactor performance using engineering calculations and numerical simulations of fluid flow, heat transfer and chemical reactions.',
      contribution:'CAD modeling, CFD analysis, design verification and interpretation of simulation results to support reactor development and technical reporting.',
      tools:['ANSYS Fluent','OpenFOAM','Cantera','Python'],groups:[{title:'Geometry, simulation & interpretation',images:[
        {src:'assets/09.jpg',title:'Problem Statement',detail:'Ekona Reactor Challenges',placeholder:false},
        {src:'assets/10.jpg',title:'Reactor Analysis Framework',detail:'Illustration of simulation framework and five mechanisms performance',placeholder:false},
        {src:'assets/11.jpg',title:'3D Flow Analysis',detail:'Application of chemical mechanisms in a 3D reactor system',placeholder:false},
        {src:'assets/12.jpg',title:'Pathway Analysis',detail:'Pathways showing the behavior of species over temperature',placeholder:false}]}]
    },
    {id:'rover',number:'04',category:'DESIGN / BUILD / TEST',title:'Human-powered rover',organization:'NASA Human Exploration Rover Challenge · 2019',role:'University team project',
      description:'Design and manufacture of a human-powered rover to traverse a simulated lunar surface, taking structural concepts through CAD, fabrication and testing.',
      contribution:'Chassis and structural subsystem design, FEA of the frame, wheels and suspension, and hands-on welding, cutting, machining and prototype assembly.',
      tools:['SolidWorks','ANSYS Structural','FEA','Fabrication'],groups:[{title:'Vehicle & structural development',images:[
        {src:'assets/13.jpg',title:'Manufactured Rover at NASA',detail:'Human-powered vehicle participated in 2019 Human Exploration Rover Challenge',placeholder:false},
        {src:'assets/14.jpg',title:'Chassis Roll Point',detail:'Frame and structural arrangement with sketch showing rolling point of the rover',placeholder:false},
        {src:'assets/rover-detail.jpg',title:'Folded 3D Model',detail:'Rover folded geometry to fit in a 5ft cubic box',placeholder:false},
        {src:'assets/17.jpg',title:'Shop Fabrication',detail:'Chassis subsystem · illustration of fabrication and wishbone suspension positioning',placeholder:false}]}]
    },
    {id:'pressure',number:'05',category:'THERMAL & PRESSURE EQUIPMENT',title:'Boiler & pressure vessel design',organization:'Academic & personal design portfolio',role:'Selected design studies',
      description:'A collection for pressure equipment design studies. Academic work includes full-scale pressure vessel design using ASME Section VIII.',
      contribution:'Pressure vessel design and engineering calculations. Boiler study details and supporting drawings will be added with the project images.',
      tools:['ASME Section VIII','Mechanical design','Engineering calculations'],groups:[{title:'Equipment models & design details',images:[
        {src:'assets/15.jpg',title:'Pressure Vessel Calculations',detail:'Project details',placeholder:false},
        {src:'assets/16.PNG',title:'Vertical Vessel Geometry',detail:'Vessel geometry and nozzle arrangement',placeholder:false},
        {src:'assets/vessel-detail.jpg',title:'Vessel Static Loadings',detail:'Static loadings with fixture',placeholder:false},
        {src:'assets/18-boiler-detail.jpg',title:'Deformation',detail:'Static deformation of the vertical vessel',placeholder:false}]}]
    }
  ]
};
