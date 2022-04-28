export function NotePreviewVid({ note }) {
    const { info } = note
    return (
        <div className='note-preview note-preview-vid'>
            <h1>Title: {info.title}</h1>
            <div className='note-preview-vid-container'>
                <iframe
                    // width='560'
                    // height='315'
                    src={info.url}
                    // src='https://www.youtube.com/embed/YdgoG8hTMUw'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>

                {/* <iframe
                    width='330'
                    height='215'
                    src={info.url}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe> */}
            </div>
        </div>
    )
}
