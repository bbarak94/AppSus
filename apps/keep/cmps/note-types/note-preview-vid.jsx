export function NotePreviewVid({ note }) {
    const { info } = note
    return (
        <div className='note-preview note-preview-vid'>
            <h1 className="note-prev-title">{info.title}</h1>
            <div className='note-preview-vid-container'>
                <iframe
                    src={info.url}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
