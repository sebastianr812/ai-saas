'use client';

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure('82c3c8dc-437e-4cd7-bfd8-0afdf7110d1a');
    }, []);
    return (
        null
    );
}

export default CrispChat;