import React, { useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

var contents = [
  { id: 1, title: 'HTML', description: 'HTML is ...' },
  { id: 2, title: 'JS', description: 'JS is ...' },
  { id: 3, title: 'React', description: 'React is ...' },
]

const Topic = () => {
  const params = useParams();
  //console.log(params);
  const topic_id = params.topic_id;

  let selected_topic = () => {
    title: 'Sorry'
    description: 'Not Found'
  };
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  };
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )
}

const Topics = () => {

  const lis = [];
  for (var i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}><Link to={`/topics/${contents[i].id}`}>{contents[i].title}</Link></li>
    );
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {/*
        <li><Link to="/topics/1">HTML</Link></li>
        <li><Link to="/topics/2">JS</Link></li>
        <li><Link to="/topics/3">React</Link></li>
         */}
        {lis}
      </ul>
      <Routes>
        {/*
        <Route path="/1" element={'HTML is ...'} />
        <Route path="/2" element={'JS is ...'} />
        <Route path="/3" element={'React is ...'} />
         */}
        <Route path="/:topic_id" element={<Topic />} />

      </Routes>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

const React_DOM = () => {
  return (
    <div style={{ marginLeft: "30px" }}>
      <h1>Hello React Router DOM</h1>
      {/* 아래의 브라우저 라우터 방식 사용
      <Home />
      <Topics />
      <Contact />
       */}
      <ul>
        {/* 아래의 Link 사용
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
         */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics/">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={"Not Found"} />
      </Routes>


    </div>
  );
};

export default React_DOM;