function MemoItem({ children, onClickItem, onClickdelete, isSelected }) {
    return (
        <div
            className={'MemoItem' + (isSelected ? ' selected' : '')}
            onClick={onClickItem}
        >
            {children}
            <button className="MemoItem__delete-button" onClick={onClickdelete}>
                X
            </button>
        </div>
    );
}

export default MemoItem;
