import './index.css';

import React from 'react';
import MemoList from '../MemoList';
import SideBarHeader from '../SideBarHeader';
import SideBarFooter from '../SideBarFooter';

function SideBar({
    memos,
    addMemo,
    setSelectedMemoIndex,
    selectedMemoIndex,
    deleteMemo,
}) {
    return (
        <div className="SideBar">
            <SideBarHeader />
            <MemoList
                memos={memos}
                selectedMemoIndex={selectedMemoIndex}
                setSelectedMemoIndex={setSelectedMemoIndex}
                deleteMemo={deleteMemo}
            />
            <SideBarFooter onClick={addMemo} />
        </div>
    );
}

export default SideBar;
