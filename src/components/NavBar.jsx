import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from '../redux/actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ activeTab }) => {
    const dispatch = useDispatch();
    const [linkNav] = useState(['home', 'skills', 'projects', 'contact']);
    const [statusNav, changeStatusNav] = useState(null);
    
    const toggleNav = () => {
        changeStatusNav(statusNav === null ? 'active' : null);
    };

    const changeTab = (value) => {
        const section = document.getElementById(value);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        dispatch(changeTabActive(value));
        toggleNav();
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dispatch(changeTabActive(entry.target.id));
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, [dispatch]);

    return (
        <header>
            <div className="logo">
                <img src="/logo.png" alt=""/> Portfolio
            </div>
            <nav className={statusNav}>
                {
                    linkNav.map(value => (
                        <span key={value} 
                            className={activeTab === value ? 'active' : ''}
                            onClick={() => changeTab(value)}>{value}</span>
                    ))
                }
            </nav>
            <div className="icon-bar" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
