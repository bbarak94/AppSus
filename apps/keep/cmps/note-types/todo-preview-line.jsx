export function TodoPreviewLine({ todo }) {
    const { id, txt, doneAt } = todo
    return (
        <div className='note-preview-todo'>
            {(!doneAt) && (
                <div className='todo-undone flex align-center'>
                    <div className='todo-img-container'>
                        <img
                            className='todo-undone-img'
                            src='assets\img\keep\todo-undone.svg'
                        ></img>
                    </div>
                    <h1>{txt}</h1>

                </div>
            )}
            {doneAt && (
                <div className='todo-done flex align-center'>
                    <div className='todo-img-container'>
                        <img
                            className='todo-done-img'
                            src='assets\img\keep\todo-done.svg'
                        ></img>
                    </div>
                    <h1>{txt}</h1>

                </div>
            )}
        </div>
    )
}
