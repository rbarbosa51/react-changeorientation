import { useState, useEffect } from "react"

export default function useOrientation(){
    const orientationType =(type) => {
        switch (type) {
          case "landscape-primary":
            return false;
          case "landscape-secondary":
            return false;
          case "portrait-primary":
            return true
          case "portrait-secondary":
            return true;
        }
    }
    const [isPortrait, setIsPortrait] = useState(orientationType(screen.orientation.type))
    useEffect(() => {
    const handleChange = () => {
      setIsPortrait(orientationType(screen.orientation.type))
    }
    window.addEventListener('resize', handleChange)
    window.addEventListener('orientationchange', handleChange)
    return () => {
      window.removeEventListener('resize', handleChange)
      window.removeEventListener('orientationchange', handleChange)
    }
  }, [])
  return [isPortrait]
}