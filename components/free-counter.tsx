'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import useProModal from "@/hooks/use-pro-modal";

interface FreeCounterProps {
    apiLimitCount: number;
    isPro: boolean;
}

const FreeCounter: React.FC<FreeCounterProps> = ({
    apiLimitCount = 0,
    isPro = false
}) => {

    const [isMounted, setIsMounted] = useState(false);
    const proModal = useProModal();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    if (isPro) {
        return null;
    }

    return (
        <div className="px-3">
            <Card className="border-0 bg-white/10 " >
                <CardContent className="py-6">
                    <div className="mb-4 space-y-2 text-sm text-center text-white">
                        <p>
                            {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
                        </p>
                        <Progress
                            className="h-3"
                            value={(apiLimitCount / MAX_FREE_COUNTS) * 100} />
                    </div>
                    <Button onClick={proModal.onOpen} variant='premium' className="w-full">
                        Upgrade to Pro
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default FreeCounter;