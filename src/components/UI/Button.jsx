export default function Button({children, cssClasses, textonly, ...props}){
    let cssClass = textonly?'text-button':'button';
    cssClasses +=' '+ cssClass
    return(
        <button className={cssClasses} {...props}>{children}</button>
    );
}