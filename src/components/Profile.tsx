export function Profile() {
    return (
        <div className="mt-36">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="/avatar.webp" alt="Movie" width="400" height="400" /></figure>
                <div className="card-body">
                    <div className=""><p className="text-center font-bold text-2xl"> LoNa </p></div>
                    <div className=""><p className="text-center"> Software Engineer of ContextCross Co. Ltd </p></div>
                    <p> Some description. </p>
                </div>
            </div>
        </div>
    )
}