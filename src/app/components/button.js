import Link from 'next/link';

const Button = ({children,href,type, className}) => {
    const styles = `py-2 px-5 text-white rounded font-semibold bg-indigo-600 hover:bg-indigo-800 transition-colors ${className ||  ''}`;

    if(href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={styles}>
            {children}
        </button>
    );
}
export default Button;