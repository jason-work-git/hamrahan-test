const MenuIcon = (props) => {
    return (
        <svg width={props.width ? props.width : 30} height={props.height ? props.height : 24} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H9" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 4H9" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 7H9" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default MenuIcon;