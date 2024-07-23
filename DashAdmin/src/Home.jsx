import React from "react";
import { BsPersonFill, BsTruck, BsFileEarmarkTextFill, BsSpeedometer2, BsEnvelopeFill, BsGearFill  } from 'react-icons/bs'
import  { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Legend } from 'recharts';
import { BarChart, Bar, Cell } from 'recharts';

function Home () {

   const data = [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    const data1 = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ];

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const data2 = [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
  return(
   <main className="main-container">
     <div className="main-title">
      <h3> Dashbord </h3>
     </div>


     <div className="main-cards">
     <div className="card">
     <div className="card-inner">
        <h3>  Dashbord</h3>
        <BsSpeedometer2  className="card_icon"/>


     </div>
     <h1>300</h1>
     </div>

     <div className="card">
     <div className="card-inner">
        <h3>  Transporter</h3>
        <BsTruck  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>


     <div className="card">
     <div className="card-inner">
        <h3>  User</h3>
        <BsPersonFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>

     <div className="card">
     <div className="card-inner">
        <h3>  Clients pro request</h3>
        <BsEnvelopeFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>


     <div className="card">
     <div className="card-inner">
        <h3>  Trans pro request </h3>
        <BsEnvelopeFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>

     <div className="card">
     <div className="card-inner">
        <h3>  Clients Reports</h3>
        <BsFileEarmarkTextFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>
     

     <div className="card">
     <div className="card-inner">
        <h3>  Trans Reports</h3>
        <BsFileEarmarkTextFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>

     <div className="card">
     <div className="card-inner">
        <h3> Settings</h3>
        <BsGearFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>
    
    
      
     </div>

   
    
    <div className="charts">
    
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
     
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data1} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
    </div>
    <h3 id="title">Users Charts</h3>
    <div className="triangle-chart">
    
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data2.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    
    </div>
    
    
   </main>
  )
}

export default Home;