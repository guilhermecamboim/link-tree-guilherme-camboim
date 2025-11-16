import { QRCodeCanvas } from "qrcode.react";
import * as S from "./styles"
import closeIcon from "../../public/images/close.png"
import copyIcon from "../../public/images/copy.png"
import checkIcon from "../../public/images/check.png"
import { useState } from "react";

interface IShareModal {
    open: boolean;
    onClose: () => void;
    link: string;
}

export default function ShareModal({ open, onClose, link }: IShareModal) {
  const [copied, setCopied] = useState(false);
  if (!open) return null;

 const copyToClipboard = () => {
    navigator.clipboard.writeText(link);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  
  return (
    <S.Overlay>
      <S.Modal>
        <S.CloseSection>
          <S.CloseIcon src={closeIcon} onClick={onClose}/>
        </S.CloseSection>
        <h2>Compartilhar Linktree</h2>

        <QRCodeCanvas value={link} size={180} />

        <S.ShareBox>
          <input value={link} readOnly />
          <S.CopyIcon
            src={copied ? checkIcon : copyIcon}
            onClick={copyToClipboard}
          />
        </S.ShareBox>
      </S.Modal>
    </S.Overlay>
  );
};


