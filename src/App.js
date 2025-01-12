import { useCallback, useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { setItem, getItem } from './lib/storage';
import debounce from 'lodash.debounce';
import { Route, Routes } from 'react-router-dom';
import Complete from './pages/Complete';
import MemoPage from './pages/MemoPage';

const debouncedSetItem = debounce(setItem, 5000);

function App() {
    const [memos, setMemos] = useState(getItem('memo') || []);

    const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

    const setMemo = useCallback(
        (newMemo) => {
            const newMemos = [...memos];
            // memos[selectedMemoIndex] = newMemo;
            newMemos[selectedMemoIndex] = newMemo;

            setMemos(newMemos);
            debouncedSetItem('memo', newMemos);
        },
        [memos, selectedMemoIndex]
    );

    const addMemo = useCallback(() => {
        const now = new Date().getTime();

        const newMemos = [
            ...memos,
            {
                title: 'Untitled',
                content: '',
                createdAt: now,
                updateAt: now,
            },
        ];

        setMemos(newMemos);
        setSelectedMemoIndex(memos.length);
        debouncedSetItem('memo', newMemos);
        // localStorage.setItem('memo', JSON.stringify(newMemos));
    }, [memos]);

    const deleteMemo = useCallback(
        (index) => {
            const newMemos = [...memos];

            newMemos.splice(index, 1);

            setMemos(newMemos);
            if (index === selectedMemoIndex) {
                setSelectedMemoIndex(0);
            }
        },
        [memos, selectedMemoIndex]
    );

    return (
        <div className="App">
            <SideBar
                memos={memos}
                addMemo={addMemo}
                selectedMemoIndex={selectedMemoIndex}
                setSelectedMemoIndex={setSelectedMemoIndex}
                deleteMemo={deleteMemo}
            />
            <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
            <Routes>
                <Route path="" element={<Complete />} />
                <Route path="/2" element={<MemoPage />} />
            </Routes>
        </div>
    );
}

export default App;
