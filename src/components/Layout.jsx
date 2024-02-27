
export const Layout = ({ children }) => {
    return (
        <div className='desktop:bg-eggshell desktop:p-24'>
            <div className="bg-white desktop:rounded-3xl desktop:mx-64 desktop:pt-6">
                {children}
            </div>
        </div>
    )
}
