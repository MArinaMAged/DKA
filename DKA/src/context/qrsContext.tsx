import React from 'react';

export interface QR {
  qr: string;
}

export type QRContextType = {
  QRs: QR[];
  addQR: (qr: QR) => void;
  clearQRs: () => void;
};

export const QRContext = React.createContext<QRContextType | null>(null);

const QRsProvider: React.FC<React.ReactNode> = ({children}) => {
  const [QRs, setQRs] = React.useState<QR[]>([]);

  const addQR = (qr: QR) => {
    setQRs([...QRs, qr]);
  };
  const clearQRs = () => setQRs([]);
  return (
    <QRContext.Provider value={{QRs, addQR, clearQRs}}>
      {children}
    </QRContext.Provider>
  );
};

export default QRsProvider;
