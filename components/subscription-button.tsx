'use client';

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface SubscriptionButtonProps {
    isPro: boolean;
}

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({
    isPro = false
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('api/stripe');

            window.location.href = response.data.url;
        } catch (e) {
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Button disabled={isLoading} onClick={onClick} variant={isPro ? 'default' : 'premium'}>
            {isPro ? 'Manage your subscription' : 'Upgrade to Jarvis Pro'}
            {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
        </Button>
    );
}

export default SubscriptionButton;