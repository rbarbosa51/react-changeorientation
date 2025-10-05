export const orientationType =(type) => {

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