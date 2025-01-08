import MemoItem from './MemoItem';

function MemoList({
    memos,
    setSelectedMemoIndex,
    selectedMemoIndex,
    deleteMemo,
}) {
    return (
        <div>
            {memos.map((memo, index) => (
                <MemoItem
                    key={index}
                    onClickItem={() => {
                        setSelectedMemoIndex(index);
                    }}
                    onClickdelete={() => {
                        deleteMemo(index);
                    }}
                    isSelected={index === selectedMemoIndex}
                >
                    {memo.title}
                </MemoItem>
            ))}
        </div>
    );
}

export default MemoList;
