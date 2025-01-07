import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
    const [memos, setMemos] = useState([
        {
            title: 'Memo 1',
            content: 'This is memo 1',
            createdAt: 1736261490405,
            updateAt: 1736261490405,
        },
        {
            title: 'Memo 2',
            content: 'This is memo 2',
            createdAt: 1736261531734,
            updateAt: 1736261531734,
        },
    ]);
    return (
        <div className="App">
            <SideBar memos={memos} />
            <MemoContainer />
        </div>
    );
}

export default App;
