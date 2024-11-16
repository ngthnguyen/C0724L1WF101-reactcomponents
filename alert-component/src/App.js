import logo from './logo.svg';
import './App.css';

import React from 'react';
import Alert from './components/Alert';

function App() {
    return (
        <div style={{ margin: '20px' }}>
            <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
        </div>
    );
}

export default App;