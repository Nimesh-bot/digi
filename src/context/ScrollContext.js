import React, { useRef } from 'react';

export const ScrollContext = React.createContext();

const ScrollProvider = ({ children }) => {
  const HomeSection = useRef(null)
  const CourseSection = useRef(null)
  const WhoSection = useRef(null)
  const BenefitsSection = useRef(null)
  const EventSection = useRef(null)
  const IntegrateSection = useRef(null)
  const SuperHeroSection = useRef(null)

  const scrollToHome = () => {
        window.scrollTo({
            top: HomeSection.current.offsetTop,
            behavior: 'smooth',
        });
    }
    const scrollToAbout = () => {
        window.scrollTo({
            top: WhoSection.current.offsetTop,
            behavior: 'smooth',
        });
    }
    const scrollToCourse = () => {
        window.scrollTo({
            top: CourseSection.current.offsetTop,
            behavior: 'smooth',
        });
    }
    const scrollToEvent = () => {
        window.scrollTo({
            top: EventSection.current.offsetTop,
            behavior: 'smooth',
        });
    }
    const scrollToIntegrate = () => {
        window.scrollTo({
            top: IntegrateSection.current.offsetTop,
            behavior: 'smooth',
        });
    }
    const scrollToSuperHero = () => {
        window.scrollTo({
            top: SuperHeroSection.current.offsetTop,
            behavior: 'smooth',
        });
    }
    const scrollToBenefits = () => {
        window.scrollTo({
            top: BenefitsSection.current.offsetTop,
            behavior: 'smooth',
        });
    }

    return (
        <ScrollContext.Provider value={{ HomeSection, CourseSection, WhoSection, BenefitsSection, IntegrateSection, SuperHeroSection, scrollToBenefits, scrollToHome, scrollToAbout, scrollToCourse, scrollToEvent, scrollToIntegrate, scrollToSuperHero }}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollProvider