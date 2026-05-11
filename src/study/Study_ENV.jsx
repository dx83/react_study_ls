import React from 'react';
import { Link } from 'react-router-dom';
import { env } from './config/Env';
// 자주 쓴다면 env.jsx가 필요할지도...

const Study_ENV = () => {
    return (
        <div>
            <h1>환경변수 연습</h1>
            <Link to={env.apiUrl}>네이버</Link>
            <br />
            {env.apiTitle}
        </div>
    );
};

export default Study_ENV;