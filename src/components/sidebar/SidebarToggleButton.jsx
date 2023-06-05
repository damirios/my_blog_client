export function SidebarToggleButton({className, handleClick}) {

    
    return <button onClick={handleClick} className={`${className} sidebar-toggler`}>
        <span></span>
    </button>
}