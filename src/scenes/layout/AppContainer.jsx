export const AppContainer = ({children, className}) => {
    return (
        <>
            <main className={` ${className} content w-screen h-screen`}>
                {children}
            </main>
        </>
    )
}