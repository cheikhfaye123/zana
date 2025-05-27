import { createContext, useContext } from 'react';

export const locationInfo = {
  address: 'C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, Valencia',
  phone: '671 45 34 34',
  hours: 'Lun-Dom: 11:00 - 23:30',
  mapsUrl: 'https://maps.google.com/?q=C/ Barcelonina 2, Ciutat Vella, 46002 Valencia, Valencia'
};

const LocationContext = createContext(locationInfo);

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LocationContext.Provider value={locationInfo}>
      {children}
    </LocationContext.Provider>
  );
};
