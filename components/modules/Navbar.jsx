import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebar, setNavbar } from '../../redux/actions';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const sidebar = useSelector(state => state.sidebar);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        dispatch(setSidebar(!sidebar));
    };

    useEffect(()=>{
        if (sidebar) {
            setIsMenuOpen(true);       
        }else{
            setIsMenuOpen(false);
        }
    },[sidebar])

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth >= 1279) {
                setIsMenuOpen(false); 
                dispatch(setSidebar(true));
                dispatch(setNavbar(false));
            } else {
                dispatch(setSidebar(false));
                dispatch(setNavbar(true));
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', checkScreenSize);

        checkScreenSize();

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <>
            <div className="z-20 sticky top-0 w-full h-[56px] bg-white shadow-[0_2px_20px_-10px_rgba(0,0,0,0.3)] xl:hidden">
                <button onClick={toggleMenu} className='my-5 mr-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                            <>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" stroke="#455A64" />
                            </>
                        ) : (
                            <>
                                <path d="M1 6.99902H19" stroke="#455A64" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 1.20605H19" stroke="#455A64" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 12.792H19" stroke="#455A64" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </>
                        )}
                    </svg>
                </button>
            </div>
        </>
    );
}
